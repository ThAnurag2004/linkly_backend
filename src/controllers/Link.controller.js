import Link from '../models/Link.model.js';
import Click from '../models/Click.model.js';
import useragent from 'useragent';
import geoip from 'geoip-lite';
import { generateShortId } from '../utils/generateShortId.js';

export const createShortUrl = async (req, res) => {
  try {
    const { originalUrl } = req.body;

    // blank or empty url validation
    if (!originalUrl || originalUrl.trim() === '') {
      return res.status(400).json({ error: 'Please Enter a Url' });
    }

    // url structure validation
    if (!/^https?:\/\//i.test(originalUrl)) {
      return res.status(400).json({ error: 'Invalid URL format (must start with http or https)' });
    }

    // shortId generation
    const shortId = generateShortId(7);

    // newLink creation
    const newLink = await Link.create({ originalUrl, shortId });

    res.status(201).json(newLink);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const redirectToOriginal = async (req, res) => {
  try {
    const { shortId } = req.params;

    // handling empty shortid or no shortId in url (fix needed)
    if (!shortId) {
      return res.status(400).json({ error: 'Please Enter a Valid Url' });
    }

    // link find using shortId and handling no link found
    const link = await Link.findOne({ shortId });
    if (!link) return res.status(404).json({ error: 'Link not found' });

    // 🧠 Get IP (depends on hosting setup)
    const ip = req.headers['x-forwarded-for']?.split(',')[0] || req.connection.remoteAddress;

    // 🌍 Get country using IP
    const geo = geoip.lookup(ip);
    const country = geo?.country || 'Unknown';

    // 💻 Get browser info
    const agent = useragent.parse(req.headers['user-agent']);
    const userAgent = `${agent.family} ${agent.major}`;

    // 💾 Save click data
    await Click.create({
      link: link._id,
      ip,
      country,
      userAgent,
    });

    // increasing click
    link.clicks++;
    await link.save();

    // redirecting to the original url
    res.redirect(link.originalUrl);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
