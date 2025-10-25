import mongoose from 'mongoose';

const LinkSchema = new mongoose.Schema(
  {
    originalUrl: {
      type: String,
      required: true,
      match: [/^https?:\/\//, 'Invalid URL format'],
    },
    shortId: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    clicks: {
      type: Number,
      default: 0,
    },
    user_Id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
    },
  },
  { timestamps: true }
);

const Link = mongoose.model('Link', LinkSchema);
export default Link;
