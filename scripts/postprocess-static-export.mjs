import { promises as fs } from 'node:fs';
import path from 'node:path';

const outDir = path.resolve(process.cwd(), 'out');
const englishDir = path.join(outDir, 'en');

async function collectHtmlFiles(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const entryPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      files.push(...await collectHtmlFiles(entryPath));
      continue;
    }

    if (entry.isFile() && entry.name.endsWith('.html')) {
      files.push(entryPath);
    }
  }

  return files;
}

async function pathExists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

if (await pathExists(englishDir)) {
  const htmlFiles = await collectHtmlFiles(englishDir);

  for (const filePath of htmlFiles) {
    const html = await fs.readFile(filePath, 'utf8');
    const updated = html.replace('<html lang="de-AT"', '<html lang="en"');

    if (updated !== html) {
      await fs.writeFile(filePath, updated, 'utf8');
    }
  }

  console.log(`Postprocessed ${htmlFiles.length} English HTML files.`);
}
