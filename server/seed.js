/**
 * DevPath — Seed Script
 * Seeds all training tasks into MongoDB
 * 
 * Run with: node server/seed.js (from project root)
 *       or: npm run seed
 * 
 * Idempotent: clears existing tasks and re-seeds from scratch
 */

const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });
const mongoose = require('mongoose');
const https = require('https');
const Task = require('./models/Task');
const User = require('./models/User');
const tasks = require('./data/tasks');

function checkYouTubeAvailability(url) {
  return new Promise((resolve) => {
    if (!url || !url.startsWith('http')) {
      return resolve(false);
    }
    
    // Use YouTube oEmbed API to verify video existence without API keys
    const oEmbedUrl = `https://www.youtube.com/oembed?url=${encodeURIComponent(url)}`;
    
    https.get(oEmbedUrl, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode === 200) {
        resolve(true);
      } else if (res.statusCode === 404 || res.statusCode === 400) {
        resolve(false);
      } else {
        resolve(null); // Unknown / Rate limited / Redirects
      }
    }).on('error', () => {
      resolve(null); // Offline or network issues
    });
  });
}


async function seed() {
  try {
    // Connect to MongoDB
    const uri = process.env.MONGODB_URI;
    if (!uri) {
      console.error('✗ MONGODB_URI not found in environment variables');
      console.error('  Create a .env file in the server/ directory with MONGODB_URI=your_connection_string');
      process.exit(1);
    }

    console.log('Connecting to MongoDB...');
    await mongoose.connect(uri);
    console.log('✓ Connected to MongoDB');

    // ─── Validate YouTube links availability ─────────────
    console.log('Validating task video links...');
    const validationPromises = [];
    const videosToCheck = [];

    tasks.forEach(t => {
      if (t.videos && t.videos.length > 0) {
        t.videos.forEach(v => {
          videosToCheck.push({ taskIndex: t.index, title: v.title, url: v.url });
          validationPromises.push(checkYouTubeAvailability(v.url));
        });
      }
    });

    if (videosToCheck.length > 0) {
      const results = await Promise.all(validationPromises);
      let invalidCount = 0;
      results.forEach((isValid, i) => {
        const item = videosToCheck[i];
        if (isValid === false) {
          console.warn(`⚠️  Warning: Task #${item.taskIndex + 1} video "${item.title}" is unavailable: ${item.url}`);
          invalidCount++;
        } else if (isValid === null) {
          console.log(`ℹ️  Info: Task #${item.taskIndex + 1} video "${item.title}" check skipped (offline/rate-limited): ${item.url}`);
        }
      });
      if (invalidCount === 0) {
        console.log(`✓ All ${videosToCheck.length} video links are active and available.`);
      } else {
        console.warn(`⚠️  Found ${invalidCount} unavailable video links! Please verify these URLs.`);
      }
    } else {
      console.log('No video links to validate.');
    }

    // Clear existing tasks (idempotent)
    const deleteResult = await Task.deleteMany({});
    console.log(`✓ Cleared ${deleteResult.deletedCount} existing tasks`);

    // Insert all tasks
    const inserted = await Task.insertMany(tasks);
    console.log(`✓ Seeded ${inserted.length} tasks`);

    // Summary
    const phases = {};
    tasks.forEach(t => {
      phases[t.phase] = (phases[t.phase] || 0) + 1;
    });
    console.log('\nTask breakdown by phase:');
    Object.entries(phases).forEach(([phase, count]) => {
      console.log(`  Phase ${phase}: ${count} tasks`);
    });
    console.log(`\n  Total: ${tasks.length} tasks`);

    // Seed default accounts if not exist
    const usersToSeed = [
      {
        name: 'System Admin',
        email: 'admin@devpath.com',
        password: 'adminpassword123',
        role: 'admin',
        currentTaskIndex: 0
      },
      {
        name: 'Test Student',
        email: 'student@devpath.com',
        password: 'password123',
        role: 'student',
        currentTaskIndex: 1,
        streak: 1,
        lastLoginDate: new Date(),
        loginDates: [new Date()]
      },
      {
        name: 'aymane',
        email: 'azzazzane007@gmail.com',
        password: 'password123',
        role: 'student',
        currentTaskIndex: 0,
        streak: 0
      },
      {
        name: 'Video Tester',
        email: 'tester_videos_1@devpath.com',
        password: 'password123',
        role: 'student',
        currentTaskIndex: 1,
        streak: 1,
        lastLoginDate: new Date(),
        loginDates: [new Date()]
      }
    ];

    console.log('\nChecking default accounts...');
    for (const u of usersToSeed) {
      const exists = await User.findOne({ email: u.email.toLowerCase() });
      if (!exists) {
        const newUser = new User(u);
        await newUser.save();
        console.log(`✓ Seeded default user: ${u.name} (${u.email}) [Role: ${u.role}]`);
      } else {
        console.log(`✓ Account already exists: ${u.name} (${u.email})`);
      }
    }


  } catch (err) {
    console.error('✗ Seed error:', err.message);
    process.exit(1);
  } finally {
    await mongoose.disconnect();
    console.log('\n✓ Disconnected from MongoDB');
  }
}

seed();
