import { APIResource } from "./axiosConfig.js";
import { SIGN_IN, SIGN_IN_WITH_GOOGLE } from "./endpoints.js";

export const signin = async (username, password) => {
  try {
    const response = await APIResource.post(SIGN_IN, { username, password });
    return response.data;
  } catch (err) {
    throw new Error(err.response.data.message);
  }
};

export const signinWithGoogleAuth = async (name, email, img) => {
  try {
    const response = await APIResource.post(SIGN_IN_WITH_GOOGLE, {
      name: name,
      email: email,
      img: img,
    });
    return response.data;
  } catch (err) {
    console.log(err.response.data.message);
  }
};
