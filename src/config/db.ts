import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async (): Promise<void> => {
    try {
        mongoose.connection.on('connected', () => console.log("✅ Database connected ..!"));
        mongoose.connection.on('error', (err) => console.log("❌ Database error:", err));

        const uri = process.env.MONGODB_URI;
        if (!uri) {
            throw new Error("MONGODB_URI is not defined in .env file");
        }

        await mongoose.connect(`${uri}/zephyratech`);
    } catch (error) {
        console.log("❌ Connection Error:", (error as Error).message);
        process.exit(1);
    }
};

export default connectDB;