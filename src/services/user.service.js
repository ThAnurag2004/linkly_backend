import User from '../models/User.model.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const findUserByEmail = async (email) => {
  return await User.findOne({ email });
};

export const validatePassword = async (plainPassword, hashedPassword) => {
  return await bcrypt.compare(plainPassword, hashedPassword);
};

export const generateToken = (user) => {
  return jwt.sign({ _id: user._id, email: user.email }, process.env.JWT_SECRET || 'mysecret', {
    expiresIn: '1h',
  });
};

export const createUser = async (name, email, password) => {
  const saltRounds = 7;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return await User.create({
    name,
    email,
    password: hashedPassword,
  });
};

export const getUserById = async (id) => {
  return await User.findById(id).select('-password');
};
