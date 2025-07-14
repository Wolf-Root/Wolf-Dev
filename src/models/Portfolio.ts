import mongoose from "mongoose";

const { Schema } = mongoose;

const portfolioSchema = new Schema(
  {
    category: {
      type: String,
      required: true,
      enum: ["Illustrations", "Websites", "Application"],
    },
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Portfolio", portfolioSchema);
