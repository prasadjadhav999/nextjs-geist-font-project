import mongoose from 'mongoose';

if (!process.env.MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable');
}

const MONGODB_URI = process.env.MONGODB_URI;

interface ConnectionCache {
  isConnected?: number;
}

const cache: ConnectionCache = {};

async function connectDB(): Promise<typeof mongoose> {
  if (cache.isConnected) {
    console.log('Using existing connection');
    return mongoose;
  }

  try {
    const db = await mongoose.connect(MONGODB_URI);
    cache.isConnected = db.connections[0].readyState;
    console.log('MongoDB connected successfully');
    return db;
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw error;
  }
}

export default connectDB;
