import { createReadStream } from 'node:fs';
import { promises as fs } from 'node:fs';
import { createServer } from 'node:http';
import path from 'node:path';

const root = path.resolve(process.cwd(), process.argv[2] || 'out');
const port = Number(process.env.PORT || process.argv[3] || 3002);

const mimeTypes = new Map([
  ['.css', 'text/css; charset=utf-8'],
  ['.gif', 'image/gif'],
  ['.html', 'text/html; charset=utf-8'],
  ['.ico', 'image/x-icon'],
  ['.jpg', 'image/jpeg'],
  ['.jpeg', 'image/jpeg'],
  ['.js', 'text/javascript; charset=utf-8'],
  ['.json', 'application/json; charset=utf-8'],
  ['.map', 'application/json; charset=utf-8'],
  ['.png', 'image/png'],
  ['.svg', 'image/svg+xml'],
  ['.txt', 'text/plain; charset=utf-8'],
  ['.webp', 'image/webp'],
  ['.woff', 'font/woff'],
  ['.woff2', 'font/woff2'],
]);

function isWithinRoot(filePath) {
  const relativePath = path.relative(root, filePath);
  return relativePath === '' || (!relativePath.startsWith('..') && !path.isAbsolute(relativePath));
}

async function statIfExists(filePath) {
  try {
    return await fs.stat(filePath);
  } catch {
    return null;
  }
}

async function resolveFile(urlPathname) {
  let pathname;

  try {
    pathname = decodeURIComponent(urlPathname);
  } catch {
    return { status: 400 };
  }

  if (pathname.includes('\0')) {
    return { status: 400 };
  }

  const requestedPath = path.join(root, pathname.replace(/^\/+/, ''));

  if (!isWithinRoot(requestedPath)) {
    return { status: 403 };
  }

  const requestedStat = await statIfExists(requestedPath);

  if (requestedStat?.isDirectory()) {
    const indexPath = path.join(requestedPath, 'index.html');
    const indexStat = await statIfExists(indexPath);
    return indexStat?.isFile() ? { filePath: indexPath, status: 200 } : { status: 404 };
  }

  if (requestedStat?.isFile()) {
    return { filePath: requestedPath, status: 200 };
  }

  if (!path.extname(requestedPath)) {
    const htmlPath = `${requestedPath}.html`;
    const htmlStat = await statIfExists(htmlPath);

    if (htmlStat?.isFile()) {
      return { filePath: htmlPath, status: 200 };
    }
  }

  const notFoundPath = path.join(root, '404.html');
  const notFoundStat = await statIfExists(notFoundPath);
  return notFoundStat?.isFile() ? { filePath: notFoundPath, status: 404 } : { status: 404 };
}

const server = createServer(async (request, response) => {
  const requestUrl = new URL(request.url || '/', `http://${request.headers.host || 'localhost'}`);
  const resolved = await resolveFile(requestUrl.pathname);

  if (!resolved.filePath) {
    response.writeHead(resolved.status, { 'Content-Type': 'text/plain; charset=utf-8' });
    response.end(resolved.status === 404 ? 'Not found' : 'Bad request');
    return;
  }

  const contentType = mimeTypes.get(path.extname(resolved.filePath)) || 'application/octet-stream';
  response.writeHead(resolved.status, {
    'Content-Type': contentType,
    'Cache-Control': resolved.status === 200 ? 'public, max-age=3600' : 'no-cache',
  });

  if (request.method === 'HEAD') {
    response.end();
    return;
  }

  createReadStream(resolved.filePath).pipe(response);
});

server.listen(port, () => {
  console.log(`Serving ${root} at http://localhost:${port}`);
});
