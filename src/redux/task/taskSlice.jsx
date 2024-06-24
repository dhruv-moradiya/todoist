import { createSlice } from '@reduxjs/toolkit';
import { addTask, completeTask, deleteTask, getTask } from './taskThunk';
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

    // * ADD TASK BUILDER
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

    // * GET TASK BUILDER
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

    // * COMPLETE TASK BUILDER
    builder.addCase(completeTask.pending, (prevState) => {
      prevState.isLoading = true;
    });
    builder.addCase(completeTask.fulfilled, (prevState, action) => {
      prevState.isLoading = false;
      prevState.task = prevState.task.map((task) => {
        if (
          task.project_id === action.payload.project_id &&
          task.section_id === action.payload.section_id &&
          task.task_id === action.payload.task_id
        ) {
          console.log(action);
          return { ...task, completed: true };
        } else {
          return { ...task };
        }
      });
    });
    builder.addCase(completeTask.rejected, (prevState) => {
      prevState.isLoading = false;
      prevState.task = [...prevState.task];
      prevState.isError = true;
    });

    // * DELETE TASK BUILDER
    builder.addCase(deleteTask.pending, (prevState) => {
      prevState.isLoading = true;
    });
    builder.addCase(deleteTask.fulfilled, (prevState, action) => {
      prevState.task = prevState.task.filter((item) => {
        if (
          item.project_id === action.payload.project_id &&
          item.section_id === action.payload.section_id &&
          item.task_id === action.payload.task_id
        ) {
          return false;
        } else {
          return true;
        }
      });
    });
    builder.addCase(deleteTask.rejected, (prevState) => {
      prevState.isLoading = false;
      prevState.task = [...prevState.task];
      prevState.isError = true;
    })
  },
});

const taskReducer = taskSlice.reducer;
export default taskReducer;
