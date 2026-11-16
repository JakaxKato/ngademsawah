const fs = require('node:fs');
const path = require('node:path');
const { spawnSync } = require('node:child_process');

const root = path.resolve(__dirname, '..');
const output = path.resolve(root, 'public');
const tailwindCli = path.join(root, 'node_modules', 'tailwindcss', 'lib', 'cli.js');

const build = spawnSync(
  process.execPath,
  [tailwindCli, '-i', './src/input.css', '-o', './styles.css', '--minify'],
  { cwd: root, stdio: 'inherit' },
);

if (build.error) throw build.error;
if (build.status !== 0) process.exit(build.status || 1);

// Refuse to remove a path outside this repository or a symlinked output folder.
if (!output.startsWith(root + path.sep)) {
  throw new Error('Unsafe build output path');
}
if (fs.existsSync(output) && fs.lstatSync(output).isSymbolicLink()) {
  throw new Error('Build output must not be a symlink');
}

fs.rmSync(output, { recursive: true, force: true });
fs.mkdirSync(path.join(output, 'assets'), { recursive: true });

const pageFiles = ['index.html', 'script.js', 'styles.css'];
const publicAssets = [
  'favicon.svg',
  'kamar.webp',
  'listharga_classic.jpg',
  'listharga_estetik_1&2.jpg',
  'listharga_estetik_3.jpg',
  'view1.webp',
  'view2.webp',
];

for (const file of pageFiles) {
  fs.copyFileSync(path.join(root, file), path.join(output, file));
}
for (const file of publicAssets) {
  fs.copyFileSync(path.join(root, 'assets', file), path.join(output, 'assets', file));
}

console.log(`Built public site with ${pageFiles.length + publicAssets.length} files.`);
