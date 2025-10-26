import 'dotenv/config';
import User from '../models/User.model.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate Input
    if (!email || !password) {
      return res.status(400).json({ error: 'Please fill all the required details' });
    }

    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (!existingUser || !(await bcrypt.compare(password, existingUser.password)))
      return res.status(404).json({ error: 'User Not Found' });

    // Checking is password correct
    const isPasswordValid = await bcrypt.compare(password, existingUser.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // jwt token generate
    const token = jwt.sign(
      { _id: existingUser._id, email: existingUser.email },
      process.env.JWT_SECRET || 'mysecret',
      { expiresIn: '1h' }
    );

    // sending response
    return res.status(200).json({
      message: 'Login successful',
      user: {
        _id: existingUser._id,
        name: existingUser.name,
        email: existingUser.email,
      },
      token,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ error: 'Please fill all the required details' });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({ error: 'User already exists, please login' });
    }

    const saltRounds = 7;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    return res.status(201).json({
      message: 'User created successfully',
      user: { _id: newUser._id, name: newUser.name, email: newUser.email },
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const profile = async (req, res) => {
  try {
    const user_id = req.user._id;

    if (!user_id) {
      return res.status(401).json({ error: 'Please login with valid credentials' });
    }

    const userDetails = await User.findById(user_id).select('-password');

    if (!userDetails) {
      return res.status(404).json({ error: 'User not found' });
    }

    return res.status(200).json({ message: 'user found', userDetails });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
