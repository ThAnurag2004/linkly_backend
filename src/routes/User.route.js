import express from 'express';
import { login, profile, register } from '../controllers/User.controller.js';
import { verifyToken } from '../middleware/auth.middleware.js';

const router = express.Router();

router.post('/login', login);
router.post('/register', register);
router.get('/profile', verifyToken, profile);

export default router;
