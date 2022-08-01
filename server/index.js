import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

// routes
import userRoutes from "./routes/users.js";
import commentRoutes from "./routes/comments.js";
import videoRoutes from "./routes/videos.js";
import authRoute from "./routes/auth.js";

const app = express();
dotenv.config();

// Allowing json file from outside the app
app.use(express.json());

// TODO: Refactor these paths
app.use("/api/auth", authRoute);
app.use("/api/users", userRoutes);
app.use("/api/videos", videoRoutes);
app.use("/api/comment", commentRoutes);

const connect = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("Database connected to the server");
    })
    .catch((err) => {
      throw err;
    });
};

app.listen(8800, () => {
  connect();
  console.log("connected");
});
