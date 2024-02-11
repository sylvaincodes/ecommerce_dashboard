import mongoose from "mongoose";

const Store = mongoose.Schema(
  {
    name: String,
    userId: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Store || mongoose.model("Store", Store);
