import { createSlice } from '@reduxjs/toolkit';
import { addTask, getTask } from './taskThunk';

const taskSlice = createSlice({
  name: 'task',
  initialState: {
    isLoading: false,
    isError: 'false',
    task: [],
  },
  reducers: {},
  extraReducers: (builder) => {

    builder.addCase(addTask.pending, (prevState) => {
      prevState.isLoading = true;
    });
    builder.addCase(addTask.fulfilled, (prevState, action) => {
      prevState.isLoading = false;
      prevState.task.push(action.payload);
      prevState.isError = false;
    });
    builder.addCase(addTask.rejected, (prevState) => {
      prevState.isLoading = false;
      prevState.task = [...prevState.task];
      prevState.isError = true;
    })

    builder.addCase(getTask.pending, (prevState) => {
      prevState.isLoading = true;
    });
    builder.addCase(getTask.fulfilled, (prevState, action) => {
      prevState.isLoading = false;
      prevState.task = [...action.payload];
      prevState.isError = false;
    });
    builder.addCase(getTask.rejected, (prevState) => {
      prevState.isLoading = false;
      prevState.task = [...prevState.task];
      prevState.isError = true;
    })
  }
});

const taskReducer = taskSlice.reducer;
export default taskReducer;
