// esbuild.config.js
const esbuild = require('esbuild');
const sassPlugin = require('esbuild-sass-plugin').sassPlugin;

const dev = process.argv.includes('--dev');

const config = {
  entryPoints: ['src/index.tsx'],
  bundle: true,
  outfile: 'public/bundle.js',
  minify: !dev,
  sourcemap: dev,
  //target: ['chrome58', 'firefox57', 'safari11', 'edge16'],
  loader: { '.png': 'file', '.jpg': 'file', '.svg': 'file' },
  plugins: [sassPlugin()],
  define: {
    'process.env.NODE_ENV': dev ? '"development"' : '"production"'
  }
};

if (dev) {
  // Запуск сервера разработки
  esbuild.serve({
    servedir: 'public',
    port: 3000
  }, config).then(server => {
    console.log('Development server running on http://localhost:3000');
  }).catch(() => process.exit(1));
} else {
  // Сборка для продакшена
  esbuild.build(config).then(() => {
    console.log('Build complete');
  }).catch(() => process.exit(1));
}