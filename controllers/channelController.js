import Channel from "../models/ChannelModel.js";

// Create or update channel info
export const createOrUpdateChannel = async (req, res) => {
  const { channelName, about, profileImg, bannerImg } = req.body;

  try {
    let channel = await Channel.findOne({ userId: req.user.id });

    if (channel) {
      // Update existing
      channel.name = channelName || channel.name;
      channel.about = about || channel.about;
      channel.profileImg = profileImg || channel.profileImg;
      channel.bannerImg = bannerImg || channel.bannerImg;
      await channel.save();
      res.status(200).json(channel);
    } else {
      // Create new
      const newChannel = new Channel({
        userId: req.user.id,
        channelName,
        about,
        profileImg,
        bannerImg,
      });
      await newChannel.save();
      res.status(201).json(newChannel);
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get channel by userId
export const getChannel = async (req, res) => {
  try {
    const channel = await Channel.findOne({ userId: req.params.userId });
    if (!channel) return res.status(404).json({ message: "Channel not found" });
    res.status(200).json(channel);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
