import express from 'express';
import mongoose from 'mongoose';
import cors from "cors";
import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/usersRoutes.js';
import videoRoutes from "./routes/videosRoutes.js";
import commentRoutes from "./routes/commentsRoutes.js";
import channelRoutes from "./routes/channelRoutes.js";

const app = new express();
const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})

app.use(cors());

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));



app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/videos", videoRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/channels", channelRoutes);


mongoose.connect("mongodb+srv://hemanthkumar1:Hemanth7873@hemanth.xrqb1.mongodb.net/youtube");

const db = mongoose.connection;

db.on('open', () => {
    console.log("Database Connetcted")
})

db.on('close', () => {
    console.log("Database Connection is failed")
})
