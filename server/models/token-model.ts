import mongoose, { Schema } from "mongoose";

const TokenSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    refreshToken: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Token || mongoose.model("Token", TokenSchema);
