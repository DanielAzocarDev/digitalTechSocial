import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { User } from '../../../interfaces/User'
export interface UsersState {
  users: User[]
}

const initialState: UsersState = {
  
  users: [],
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    registerUser: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const {  registerUser } = usersSlice.actions
 
export default usersSlice.reducer