import { Schema, model } from "mongoose";

const <entidad>Schema = new Schema({
  sku:   { type: String, required: true, unique: true },
  price: { type: Number, required: true },
});

export default model("<Entidad>", <entidad>Schema);