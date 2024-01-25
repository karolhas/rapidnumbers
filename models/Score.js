import mongoose from "mongoose";

const { Schema } = mongoose;

const scoreSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    nickname: {
      type: String,
      required: true,
    },
    score: {
      type: Number,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Score || mongoose.model("Score", scoreSchema);
