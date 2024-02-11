import mongoose from "mongoose";

const Store = mongoose.Schema(
  {
    name: {
      type: String,
      require: "name is required",
    },
    userId: {
      type: String,
      require: "user is required",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Store || mongoose.model("Store", Store);
