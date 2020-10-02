import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number },
  rating: { type: Number },
  imgUrl: { type: String },
});
