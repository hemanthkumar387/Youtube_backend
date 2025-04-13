import Video from "../models/VideoModel.js";

// Add video
export const addVideo = async (req, res) => {
  const newVideo = new Video({ userId: req.user.id, ...req.body });

  try {
    const savedVideo = await newVideo.save();
    res.status(201).json(savedVideo);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getAllVideos = async (req, res) => {
  try {
    const videos = await Video.find().sort({ createdAt: -1 }); // latest first
    res.status(200).json(videos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single video
export const getVideo = async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);
    res.status(200).json(video);
  } catch (err) {
    res.status(404).json({ message: "Video not found" });
  }
};

// Update a video
export const updateVideo = async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);

    if (!video) return res.status(404).json({ message: "Video not found" });

    // Only the video owner can update
    if (video.userId !== req.user.id) {
      return res.status(403).json({ message: "Unauthorized to update this video" });
    }

    const updatedVideo = await Video.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true } // return the updated document
    );

    res.status(200).json(updatedVideo);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


// Delete a video
export const deleteVideo = async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);
    if (video.userId !== req.user.id) return res.status(403).json({ message: "Unauthorized" });

    await video.deleteOne();
    res.status(200).json({ message: "Video deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// controllers/videoController.js
export const toggleLike = async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);
    if (!video) return res.status(404).json("Video not found");
    
    // Simulate toggle by tracking in local storage (better to use user ID in real case)
    video.likes += req.body.increment ? 1 : -1;
    await video.save();
    res.status(200).json(video);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const toggleDislike = async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);
    if (!video) return res.status(404).json("Video not found");

    video.dislikes += req.body.increment ? 1 : -1;
    await video.save();
    res.status(200).json(video);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const toggleSubscribe = async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);
    if (!video) return res.status(404).json("Video not found");

    video.subscribers += req.body.increment ? 1 : -1;
    await video.save();
    res.status(200).json(video);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
