import User from '../models/User.model.js';
import { hash } from '../utils/generateHashPassword.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

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
  const hashedPassword = await hash(password);
  return await User.create({
    name,
    email,
    password: hashedPassword,
  });
};

export const getUserById = async (id) => {
  return await User.findById(id).select('-password');
};
