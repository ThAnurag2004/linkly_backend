import express from 'express';
import { createShortUrl, redirectToOriginal } from '../controllers/Link.controller.js';

const router = express.Router();

router.get('/:shortId', redirectToOriginal);
router.post('/api/links/', createShortUrl);

export default router;
