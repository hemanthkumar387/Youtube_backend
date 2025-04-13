import mongoose from "mongoose";

const ChannelSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
      unique: true,
    },
    channelName: {
      type: String,
      required: true,
    },
    about: {
      type: String,
      required: true,
    },
    profileImg: {
      type: String,
      required: true,
    },
    bannerImg: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Channel", ChannelSchema);
