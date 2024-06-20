import { createSlice } from '@reduxjs/toolkit';
import { addTask, completeTask, getTask } from './taskThunk';
import Completed from '../../page/Completed';

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
    });

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
    });

    builder.addCase(completeTask.pending, (prevState) => {
      prevState.isLoading = true;
    });
    builder.addCase(completeTask.fulfilled, (prevState, action) => {
      prevState.isLoading = false;
      prevState.task = prevState.task.map((task) => {
        if (
          task.project_id === action.payload.project_id &&
          task.section_id === action.payload.section_id
        ) {
          return { ...task, completed: true };
        } else {
          return (prevState.task = [...prevState.task]);
        }
      });
    });
    builder.addCase(completeTask.rejected, (prevState) => {
      prevState.isLoading = false;
      prevState.task = [...prevState.task];
      prevState.isError = true;
    });
  },
});

const taskReducer = taskSlice.reducer;
export default taskReducer;
