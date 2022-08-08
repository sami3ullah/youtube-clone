import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

// routes
import userRoutes from "./routes/users.js";
import commentRoutes from "./routes/comments.js";
import videoRoutes from "./routes/videos.js";
import authRoute from "./routes/auth.js";

const app = express();
dotenv.config();

// Allowing json file from outside the app
app.use(express.json());
app.use(cookieParser());

// TODO: Refactor these paths
app.use("/api/auth", authRoute);
app.use("/api/users", userRoutes);
app.use("/api/videos", videoRoutes);
app.use("/api/comments", commentRoutes);

// error middleware
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong";
  return res.status(status).json({
    success: false,
    status,
    message,
  });
});

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
  console.log("Server Started");
});
