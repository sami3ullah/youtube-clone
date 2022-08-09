import {APIResource} from "./axiosConfig.js";
import {USER_DETAILS} from "./endpoints.js";
//get random videos
export const getUserDetails = async(videoId) => {
    const URL = `${USER_DETAILS}/${videoId}`
    try{
        const response = await APIResource.get(URL);
        return response.data;
    }catch(err){
        throw new Error(err);
    }
}