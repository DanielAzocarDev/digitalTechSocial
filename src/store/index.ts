import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import userReducer from './features/users/userSlice'
import authReducer from './features/auth/authSlice'
import postReducer from './features/posts/postsSlice'

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = persistReducer(persistConfig,combineReducers({
  users: userReducer,
  auth: authReducer,
  posts: postReducer
}))

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }),
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch