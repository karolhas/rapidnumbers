import mongoose, { Schema, models } from "mongoose";

const scoreSchema = new Schema(
  {
    nickname: {
      type: String,
      require: true,
    },
    score: {
      type: Number,
      require: true,
    },
  },
  { timestamps: true }
);

const Score = models.Score || mongoose.model("Score", scoreSchema);

export default Score;
