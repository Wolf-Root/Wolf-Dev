import mongoose from "mongoose";

const { Schema } = mongoose;

const PostsSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    sabTitle: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Posts", PostsSchema);
