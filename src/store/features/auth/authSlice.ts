import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { User } from '../../../interfaces/User'

export interface AuthState { 
  isAuth: boolean
  user: User
}

const initialState: AuthState = {
  isAuth: false,
  user: {
    username: '',
    name: '',
    surname: '',
    avatar: ''
  }
}

export const authSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      state.user = action.payload
      state.isAuth = true
    },
    logout: (state) => {
      state.user = {
        username: '',
        name: '',
        surname: '',
        avatar: ''
      }
      state.isAuth = false
    }
  },
})

// Action creators are generated for each case reducer function
export const {  login, logout } = authSlice.actions
 
export default authSlice.reducer