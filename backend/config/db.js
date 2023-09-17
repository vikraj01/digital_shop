import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(`mongodb+srv://Vik_ash_raj:root@cluster0.mfral.mongodb.net/ecommerce-mern-proshop`);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
