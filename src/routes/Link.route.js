import express from 'express';
import { verifyToken } from '../middleware/auth.middleware.js';
import { createShortUrl, redirectToOriginal } from '../controllers/Link.controller.js';

const router = express.Router();

router.get('/:shortId', redirectToOriginal);
router.post('/api/links', verifyToken, createShortUrl);

export default router;
