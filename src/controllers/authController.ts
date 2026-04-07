import { Request, Response } from 'express';
import User from '../models/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// --- Login Logic ---
export const login = async (req: Request, res: Response): Promise<any> => {
    try {
        const { email, password } = req.body;

        // 1. User Checking
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }

        // 2. Password Checking
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        // 3. Create JWT Token 
        const token = jwt.sign(
            { id: user._id }, 
            process.env.JWT_SECRET as string, 
            { expiresIn: '1h' }
        );

        res.status(200).json({
            message: "Login Successful",
            token,
            user: { id: user._id, email: user.email }
        });

    } catch (error) {
        res.status(500).json({ message: "Server error", error: (error as Error).message });
    }
};

// --- Register Logic ---
export const register = async (req: Request, res: Response): Promise<any> => {
    try {
        const { email, password } = req.body;

        // Existing User Checking
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ message: "User already exists" });

        // Password hashing
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({ email, password: hashedPassword });
        await newUser.save();

        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error registering user" });
    }
};