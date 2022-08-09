import {APIResource} from "./axiosConfig.js";
import {TRENDING_VIDEOS, RANDOM_VIDEOS, SUBSCRIBED_VIDEOS} from "./endpoints.js";
//get random videos
export const getVideos = async(type) => {
    let URL = '';
    if(type === "random")URL = RANDOM_VIDEOS
    else if(type === "trend") URL = TRENDING_VIDEOS
    else URL = SUBSCRIBED_VIDEOS;
    try{
        const response = await APIResource.get(URL);
        return response.data;
    }catch(err){
        throw new Error(err);
    }
}