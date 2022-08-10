import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    currentVideos: null,
    loading: false,
    error: false
}

export const videoSlice = createSlice({
    name: "video",
    initialState,
    reducers: {
        videoFetchingStart: (state) => {
            state.loading = true;
        },
        videoFetchingSuccess: (state, action) => {
            state.loading = false;
            state.currentVideos = action.payload;
        },
        videoFetchingFailed: (state) => {
            return initialState
        }
    }
})

export const {videoFetchingStart, videoFetchingSuccess, videoFetchingFailed } = videoSlice.actions;
export default videoSlice.reducer;