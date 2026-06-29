import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI;

    if (!uri) {
      throw new Error(
        'MONGO_URI is not defined — check that src/config/.env exists and has the key set',
      );
    }

    const conn = await mongoose.connect(uri);
    console.log(
      `MongoDB connected: ${conn.connection.host}/${conn.connection.name}`,
    );
  } catch (err) {
    console.error('MongoDB connection failed:', err.message);
    process.exit(1);
  }
};

export default connectDB;
