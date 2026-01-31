import fs from 'fs';
import path from 'path';

const ANALYZE_FILE = path.join(process.cwd(), '.next', 'analyze', 'client.html');
const SIZE_THRESHOLD = parseInt(process.env.BUNDLE_SIZE_THRESHOLD || '50000', 10); // bytes

if (!fs.existsSync(ANALYZE_FILE)) {
  console.error('Analyzer file not found:', ANALYZE_FILE);
  process.exit(2);
}

const txt = fs.readFileSync(ANALYZE_FILE, 'utf8');
const m = txt.match(/window\.chartData\s*=\s*(\[[\s\S]*?\]);/);
if (!m) {
  console.error('chartData not found in analyzer HTML');
  process.exit(3);
}

let dataStr = m[1];
try {
  // attempt parse
  var chartData = JSON.parse(dataStr);
} catch {
  dataStr = dataStr.replace(/,\s*([\]\}])/g, '$1');
  try {
    chartData = JSON.parse(dataStr);
  } catch (e) {
    console.error('Failed to parse chartData:', e.message);
    process.exit(4);
  }
}

// collect items
const items = [];
function walk(groups, chunkLabel) {
  if (!Array.isArray(groups)) return;
  for (const g of groups) {
    if (g.groups) walk(g.groups, chunkLabel);
    if ((g.path || g.label) && (typeof g.parsedSize === 'number' || typeof g.statSize === 'number')) {
      items.push({ path: g.path || g.label, label: g.label || null, parsedSize: g.parsedSize || g.statSize || 0, chunk: chunkLabel });
    }
  }
}

for (const chunk of chartData) {
  const chunkLabel = chunk.label || null;
  if (chunk.groups) walk(chunk.groups, chunkLabel);
}

// find items exceeding threshold
const big = items.filter(i => (i.parsedSize || 0) > SIZE_THRESHOLD)
  .sort((a,b) => b.parsedSize - a.parsedSize);

if (big.length) {
  console.error(`Found ${big.length} client bundle item(s) over ${SIZE_THRESHOLD} bytes:`);
  for (const b of big) {
    console.error(`- ${b.path} parsed=${b.parsedSize} bytes (chunk=${b.chunk})`);
  }
  console.error('Failing build to avoid shipping large client bundles. Set BUNDLE_SIZE_THRESHOLD to override.');
  process.exit(5);
}

console.log(`No client bundle items exceed ${SIZE_THRESHOLD} bytes (${items.length} items scanned).`);
process.exit(0);
