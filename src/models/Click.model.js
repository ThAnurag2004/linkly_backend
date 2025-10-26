// models/Click.model.js
import mongoose from 'mongoose';

const clickSchema = new mongoose.Schema(
  {
    link: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Link',
      required: true,
    },
    ip: { type: String },
    country: { type: String, default: 'Unknown' },
    userAgent: { type: String },
  },
  { timestamps: true } // createdAt = click time
);

const Click = mongoose.model('Click', clickSchema);
export default Click;
