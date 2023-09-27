import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: [],
}

export const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        
    }
})

export default postSlice.reducer;