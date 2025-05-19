import mongoose, { Schema, model, models } from "mongoose";

const stockSchema = new Schema({
  total: {
    type: Number,
    required: true,
    default: 0,
  },
});

export default models.Stock || model("Stock", stockSchema);
