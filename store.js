import { configureStore } from '@reduxjs/toolkit'
import guestsReducer from './slices/guestsSlice'

export const store = configureStore({
  reducer: {
    guests: guestsReducer,
  },
})