import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { User } from '../../../interfaces/User'

export interface UsersState {
  activeUser: User
  users: User[]
}

const initialState: UsersState = {
  activeUser: {
    username: '',
    name: '',
    surname: '',
    avatar: ''
  },
  users: [],
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    registerUser: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload)
      state.activeUser = action.payload
    },
    loginUser: (state, action: PayloadAction<string>) => {
      state.activeUser = state.users.filter(user => action.payload === user.username)[0]
    }
  },
})

// Action creators are generated for each case reducer function
export const {  registerUser } = usersSlice.actions

export default usersSlice.reducer