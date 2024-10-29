import {createSlice, configureStore} from '@reduxjs/toolkit';

const counterSlice = createSlice ({
    name: 'basicStore',
    initialState: {count: 0},
    reducers: {
      increment: (state) => {
        state.count += 1
      },
      decrement: (state) => {
        state.count -= 1
      },
      incrementByAmount: (state, action) => {
        state.count += action.payload
      },
      reset: (state) => {
        state.count = 0
      },
    },
  })


export const {increment, decrement, incrementByAmount, reset} = counterSlice.actions;

const store = configureStore({
    reducer: {
      basicStore: counterSlice.reducer,
    }
});

export default store;
