import Video from "../models/Video.js";
import User from "../models/User.js";
import {createError} from "../utils/errors.js";

export const addVideo = async (req, res, next) => {
    // req.user.id is coming from verifyToken function
    const newVideo = new Video({userId: req.user.id, ...req.body});
    try{
        const savedVideo = await newVideo.save();
        res.status(201).json(savedVideo);
    }catch(err){
        next(err)
    }
}

export const deleteVideo = async (req, res, next) => {
    try{
        const video = await Video.findById(req.params.id);
        if(!video) return next(createError(404,"Video now found!"))
        //delete the video if found
        await Video.findByIdAndDelete(req.params.id);
        res.status(200).json("Video deleted");
    }catch(err){
        next(err)
    }
}

export const updateVideo = async (req, res, next) => {
    try{
        const video = await Video.findById(req.params.id);
        console.log("inside updated video")
        if(!video) return next(createError(404,"Video now found!"))
        //if user id and video user id is not same
        if(!(req.user.id === video.userId)) return next(createError(403, "Access Denied, you don't have permissions to edit this video"))

        const updatedVideo = await Video.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {new: true})

        res.status(200).json(updatedVideo)
    }catch(err){
        next(err)
    }
}

export const getVideo = async (req, res, next) => {
    try{
        const video = await Video.findById(req.params.id);
        res.status(200).json(video);
    }catch(err){
        next(err)
    }
}

export const increaseVideoView = async (req, res, next) => {
    try{
        await Video.findByIdAndUpdate(req.params.id, {
            $inc: {views: 1}
        });
        res.status(200).json("Incremented 1 view to the video");
    }catch(err){
        next(err)
    }
}

export const getTrendingVideos = async (req, res, next) => {
    try{
        // getting the videos that have most views: -1 means most 1 means less
        const videos = await Video.find().sort({views:-1});
        res.status(200).json(videos);
    }catch(err){
        next(err)
    }
}

export const getRandomVideos = async (req, res, next) => {
    try{
        const videos = await Video.aggregate([{$sample: {size: 40}}]);
        res.status(200).json(videos);
    }catch(err){
        next(err)
    }
}

export const getSubscribedChannelVideos = async (req, res, next) => {
    try{
    //    get the user first
        const user = await User.findById(req.user.id);
        const channels = user.subscribedChannels;

        // we're gonna find all the channel for that users, that's why we are using Promise.all()
        const subscribedChannelVideosList = await Promise.all(
            channels.map(channelId => {
                //find all the videos where userId === channelId, i.e: subscribed channels
                return Video.find({userId : channelId})
            })
        )

        res.status(200).json(subscribedChannelVideosList.flat().sort((a,b) => b.createdAt - a.createdAt))
    }catch(err){
        next(err)
    }
}

export const getVideoByTag = async (req, res, next) => {
    const tags = req.query.tags.split(",");
    try {
        const videos = await Video.find({ tags: { $in: tags } }).limit(20);
        res.status(200).json(videos);
    } catch (err) {
        next(err);
    }
};

export const search = async(req, res, next) => {
    const query = req.query.q;
    try {
        const videos = await Video.find({title: {$regex: query, $options: "i"}}).limit(40);
        res.status(200).json(videos);
    }
    catch(err){
        next(err);
    }
}