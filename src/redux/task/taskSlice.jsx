import { createSlice } from '@reduxjs/toolkit';

const taskSlice = createSlice({
  name: 'task',
  initialState: {
    isLoading: false,
    isError: 'false',
    task: [],
  },
  reducers: {},
  // extraReducers: {

  // }
});

const taskReducer = taskSlice.reducer;
export default taskReducer;
