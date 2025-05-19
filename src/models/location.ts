import mongoose, { Schema, models, model } from 'mongoose';

const LocationSchema = new Schema({
  date: { type: Date, default: Date.now },
  type: { type: String, enum: ['louer', 'rendre'], required: true },
  quantity: { type: Number, required: true },
});

const Location = models.Location || model('Location', LocationSchema);

export default Location;
