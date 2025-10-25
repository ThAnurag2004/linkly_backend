import mongoose from 'mongoose';

const clickSchema = new mongoose.Schema(
  {
    link: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Link',
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    ip: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    userAgent: {
      type: String,
    },
  },
  { timestamps: true }
);

const Click = mongoose.model('Click', clickSchema);
export default Click;
