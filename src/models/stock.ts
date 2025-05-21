import mongoose, { Schema, models, model } from "mongoose";

const StockSchema = new Schema({
  total: { type: Number, required: true, default: 0 },
});

const Stock = models.Stock || model("Stock", StockSchema);

export default Stock;
