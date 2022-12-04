import { createSlice } from '@reduxjs/toolkit'

type CounterState = {
  value: number
}

const initialState: CounterState = {
  value: 0,
}

const counterReducer = createSlice({
  name: 'counter',
  initialState: initialState,
  reducers: {
    incrementHandler: (state: CounterState) => {
      ++state.value
    },
    decrementHandler: (state: CounterState) => {
      state.value == 0 ? (state.value = 0) : --state.value
    },
  },
})

export const { incrementHandler, decrementHandler } = counterReducer.actions
export const ConterReducer = counterReducer.reducer
