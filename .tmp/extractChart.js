import fs from 'fs';
import path from 'path';

const file = path.join(process.cwd(), '.next', 'analyze', 'client.html');
const txt = fs.readFileSync(file, 'utf8');
const m = txt.match(/window\.chartData\s*=\s*(\[[\s\S]*?\]);/);
if (!m) {
  console.error('chartData not found');
  process.exit(2);
}
let dataStr = m[1];
// Try to JSON.parse; if fails, attempt small fixes (remove trailing commas)
let chartData;
try {
  chartData = JSON.parse(dataStr);
} catch {
  // Remove trailing commas before array/object ends and retry
  dataStr = dataStr.replace(/,\s*([\]\}])/g, '$1');
  try {
    chartData = JSON.parse(dataStr);
  } catch (e2) {
    console.error('JSON parse failed after cleanup:', e2.message);
    process.exit(3);
  }
}
const items = [];
function walkGroups(groups, chunkLabel) {
  if (!Array.isArray(groups)) return;
  for (const g of groups) {
      if (g.groups && g.groups.length) {
        walkGroups(g.groups, chunkLabel);
      }
    // leaf module-like entries often have id or path and sizes
    if ((g.id || g.path || g.label) && (typeof g.parsedSize === 'number' || typeof g.statSize === 'number')) {
      items.push({
        label: g.label || null,
        path: g.path || null,
        id: g.id || null,
        statSize: g.statSize || 0,
        parsedSize: g.parsedSize || 0,
        gzipSize: g.gzipSize || 0,
        chunk: chunkLabel || null
      });
    }
  }
}
for (const chunk of chartData) {
  const chunkLabel = chunk.label || null;
  // chunk itself may have sizes
  if (typeof chunk.parsedSize === 'number' || typeof chunk.statSize === 'number') {
    items.push({
      label: chunk.label,
      path: chunk.label,
      id: null,
      statSize: chunk.statSize || 0,
      parsedSize: chunk.parsedSize || 0,
      gzipSize: chunk.gzipSize || 0,
      chunk: chunkLabel
    });
  }
  if (chunk.groups) walkGroups(chunk.groups, chunkLabel);
}
// Deduplicate by path+label+id
const seen = new Map();
const dedup = [];
for (const it of items) {
  const key = `${it.path || ''}::${it.label || ''}::${it.id || ''}`;
  if (!seen.has(key)) {
    seen.set(key, true);
    dedup.push(it);
  }
}
// Sort by parsedSize desc, fallback to statSize
dedup.sort((a,b)=> (b.parsedSize || b.statSize) - (a.parsedSize || a.statSize));
const top = dedup.slice(0, 20);
console.log('Top 20 modules/chunks by parsedSize (bytes):\n');
for (let i=0;i<top.length;i++){
  const t = top[i];
  console.log(`#${i+1} parsed=${t.parsedSize} gzip=${t.gzipSize} stat=${t.statSize} | label=${t.label} | path=${t.path} | chunk=${t.chunk}`);
}
console.log('\n(You can change sorting to gzipSize or statSize if you prefer.)');
