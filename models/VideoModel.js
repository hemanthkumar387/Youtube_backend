import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    videoUrl: {
      type: String,
      required: true
    },
    thumbnailUrl: {
      type: String,
      required: true
    },
    channel: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    views: {
      type: String,
      default: 200
    },
    subscribers: {
      type: Number,
      default: 60
    },
    uploadTime : {
      type: Date,
      default: Date.now,
    },
    likes: {
      type: Number,
      default: 100
    },
    dislikes: {
      type: Number,
      default: 3
    },
    tags: {
      type: [String]
    },
    comments: {
      type: [String]
    },
    profileImage: {
      type : String,
    }
  },
  { timestamps: true }
);

export default mongoose.model("Video", VideoSchema);
