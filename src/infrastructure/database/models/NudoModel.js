import mongoose from "mongoose";

const nudoSchema = new mongoose.Schema({
  material:   { type: String, required: true },
  dificultad: { type: Number, required: true },
});

export default mongoose.model("Nudo", nudoSchema);
