import { configureStore } from '@reduxjs/toolkit'
import UserSlice from './counters/UserSlice'

export const store = configureStore({
  reducer: {
    users:UserSlice
  },
})