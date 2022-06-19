import { createSlice, PayloadAction } from '@reduxjs/toolkit'



export const postslice = createSlice({
    name: "counter",
    initialState: {
        posts: [],
    },
    reducers: {
        addpost: (state, action) => {
            console.log(action);
            state.posts.push(action.payload);
        },
        deletepost: (state, action) => {
            state.posts = state.posts.filter((ele, i) => {
                return ele.id !== action.payload.id
            })
        },
        updpost: (state, action) => {
           
            state.posts[action.payload.id] = action.payload;
       
        }



},
});

// Action creators are generated for each case reducer function
export const { addpost, deletepost,updpost } = postslice.actions;

export default postslice.reducer;