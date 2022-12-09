import { configureStore } from '@reduxjs/toolkit'
import { ConterReducer } from '../reducers/counterReducer'

export const store = configureStore({
  reducer: {
    countReducer: ConterReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
