import mongoose from "mongoose";

const { Schema } = mongoose;

const postSchema = new Schema(
  {
    nickname: {
      type: String,
      required: true,
    },
    score: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Post || mongoose.model("Post", postSchema);
