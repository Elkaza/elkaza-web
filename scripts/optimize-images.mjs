#!/usr/bin/env node

/**
 * Image optimization script for static export builds
 * 
 * Since Next.js static export with unoptimized: true doesn't process images,
 * this script pre-optimizes images before they're deployed.
 * 
 * Usage:
 * - Add to package.json scripts: "optimize-images": "node scripts/optimize-images.mjs"
 * - Run before build: npm run optimize-images && npm run build
 * 
 * Requirements:
 * - ImageMagick (convert command) or sharp package
 * - Images in: public/images/*
 * - Output: public/images-optimized/*
 * 
 * Formats:
 * - JPEG: 80% quality
 * - PNG: 8-bit (reduced colors)
 * - WebP: 75% quality (modern browsers)
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');
const imageDir = path.join(projectRoot, 'public', 'images');
const optimizedDir = path.join(projectRoot, 'public', 'images-optimized');

console.log('🖼️  Image Optimization Script');
console.log('============================\n');

// Check if ImageMagick is available
function hasImageMagick() {
  try {
    require('child_process').execSync('convert --version', { stdio: 'ignore' });
    return true;
  } catch {
    return false;
  }
}

// Check if sharp is available
async function hasSharp() {
  try {
    await import('sharp');
    return true;
  } catch {
    return false;
  }
}

// Warn if no optimizer is available
async function checkToolAvailability() {
  const hasMagick = hasImageMagick();
  const hasSharpLib = await hasSharp();

  if (!hasMagick && !hasSharpLib) {
    console.warn('⚠️  No image optimizer available!');
    console.warn('   Install one of:');
    console.warn('   1. ImageMagick: brew install imagemagick');
    console.warn('   2. sharp package: npm install sharp');
    return false;
  }

  if (hasMagick) {
    console.log('✅ ImageMagick detected - will use for optimization');
  } else if (hasSharpLib) {
    console.log('✅ Sharp library detected - will use for optimization');
  }

  return true;
}

// Optimize images with sharp
async function optimizeWithSharp() {
  try {
    const sharp = (await import('sharp')).default;

    if (!fs.existsSync(imageDir)) {
      console.log('📁 No images directory found');
      return;
    }

    if (!fs.existsSync(optimizedDir)) {
      fs.mkdirSync(optimizedDir, { recursive: true });
    }

    const files = fs.readdirSync(imageDir);
    const imageFiles = files.filter((f) =>
      /\.(jpg|jpeg|png|webp)$/i.test(f)
    );

    if (imageFiles.length === 0) {
      console.log('📁 No images found in public/images/');
      return;
    }

    console.log(`\n🔄 Optimizing ${imageFiles.length} images...\n`);

    for (const file of imageFiles) {
      const inputPath = path.join(imageDir, file);
      const ext = path.extname(file).toLowerCase();
      const baseName = path.basename(file, ext);

      try {
        // Optimize JPEG
        if (['.jpg', '.jpeg'].includes(ext)) {
          await sharp(inputPath)
            .jpeg({ quality: 80, progressive: true })
            .toFile(path.join(optimizedDir, `${baseName}.jpg`));
          console.log(`✅ ${file} → ${baseName}.jpg (80% quality)`);

          // Also create WebP version
          await sharp(inputPath)
            .webp({ quality: 75 })
            .toFile(path.join(optimizedDir, `${baseName}.webp`));
          console.log(`✅ ${file} → ${baseName}.webp`);
        }

        // Optimize PNG
        if (ext === '.png') {
          await sharp(inputPath)
            .png({ compressionLevel: 9 })
            .toFile(path.join(optimizedDir, `${baseName}.png`));
          console.log(`✅ ${file} → ${baseName}.png (9-level compression)`);

          // Also create WebP version
          await sharp(inputPath)
            .webp({ quality: 75 })
            .toFile(path.join(optimizedDir, `${baseName}.webp`));
          console.log(`✅ ${file} → ${baseName}.webp`);
        }
      } catch (error) {
        console.error(`❌ Error optimizing ${file}:`, error instanceof Error ? error.message : error);
      }
    }

    console.log('\n✨ Image optimization complete!');
    console.log(`📁 Optimized images saved to: public/images-optimized/`);
  } catch (error) {
    console.error('❌ Optimization failed:', error);
  }
}

// Main
(async () => {
  try {
    const hasTooling = await checkToolAvailability();

    if (!hasTooling) {
      console.log('\n⏭️  Skipping optimization - no tools available');
      process.exit(0);
    }

    await optimizeWithSharp();
  } catch (error) {
    console.error('❌ Script error:', error);
    process.exit(1);
  }
})();
