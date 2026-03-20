import mongoose from 'mongoose';
import * as fs from 'fs';
import * as path from 'path';
import Character from './models/Character.js';

try {
  process.loadEnvFile('.env.local');
} catch (error) {
  console.warn('Warning: .env.local not found or process.loadEnvFile not supported.');
}

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error('Error: MONGODB_URI is not defined in .env.local');
  process.exit(1);
}

const DATA_PATH = path.join(process.cwd(), 'data', 'simpsons.characters.json');

async function seed() {
  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(MONGODB_URI as string);
    console.log('Connected successfully.');

    console.log('Reading data from:', DATA_PATH);
    const rawData = fs.readFileSync(DATA_PATH, 'utf-8');
    const characters = JSON.parse(rawData);

    console.log(`Found ${characters.length} characters. Clearing existing data...`);
    await Character.deleteMany({});
    console.log('Collection cleared.');

    console.log('Inserting characters...');
    await Character.insertMany(characters);

    console.log('Database seeded successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await mongoose.connection.close();
    console.log('Connection closed.');
    process.exit(0);
  }
}

seed();
