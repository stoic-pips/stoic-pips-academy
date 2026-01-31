// vercel-build.js
/* eslint-disable @typescript-eslint/no-require-imports */
const { execSync } = require('child_process');

try {
  console.log('Installing dependencies...');
  execSync('npm install', { stdio: 'inherit' });

  console.log('Running build...');
  execSync('npm run build', { stdio: 'inherit' });

  console.log('Build completed successfully!');
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
}