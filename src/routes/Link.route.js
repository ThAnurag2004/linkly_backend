import express from 'express';
import { verifyToken } from '../middleware/auth.middleware.js';
import {
  createShortUrl,
  getAnalytics,
  redirectToOriginal,
} from '../controllers/Link.controller.js';

const router = express.Router();

router.get('/:shortId', redirectToOriginal);
router.post('/api/links', verifyToken, createShortUrl);
router.get('/:shortId/analytics', verifyToken, getAnalytics);

export default router;
