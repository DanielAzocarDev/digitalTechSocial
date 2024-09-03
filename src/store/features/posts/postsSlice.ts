import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Post } from '../../../interfaces/Post'

export interface PostsState {
  posts: Post[]
}

const initialState: PostsState = {
  posts: [],
}

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<Post>) => {
      state.posts.push(action.payload)
    },
    updatePost: (state, action: PayloadAction<Post>) => {
      const index = state.posts.findIndex(post => post.create_at === action.payload.create_at)
      if (index !== -1) {
        state.posts[index] = action.payload
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const {  addPost, updatePost } = postsSlice.actions

export default postsSlice.reducer