import { createSlice } from '@reduxjs/toolkit';
import { addProject, deleteProject, getProjects } from './projectThunk';

const projectSlice = createSlice({
  name: 'project',
  initialState: {
    isLoading: false,
    isError: 'false',
    project: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    // * ADD-PROJECT THUNK
    builder.addCase(addProject.pending, (prevState) => {
      prevState.isLoading = true;
    });
    builder.addCase(addProject.fulfilled, (prevState, action) => {
      prevState.isLoading = false;
      prevState.project.push(action.payload);
      prevState.isError = false;
    });
    builder.addCase(addProject.rejected, (prevState) => {
      prevState.isLoading = false;
      prevState.project = [...prevState.todos];
      prevState.isError = true;
    });

    // * GET-PROJECT THUNK
    builder.addCase(getProjects.pending, (prevState) => {
      prevState.isLoading = true;
    });
    builder.addCase(getProjects.fulfilled, (prevState, action) => {
      prevState.isLoading = false;
      prevState.project = action.payload;
      prevState.isError = false;
    });
    builder.addCase(getProjects.rejected, (prevState) => {
      prevState.isLoading = false;
      prevState.project = [...prevState.todos];
      prevState.isError = true;
    });

    // * DELETE-PROJECT THUNK
    builder.addCase(deleteProject.pending, (prevState) => {
      prevState.isLoading = true;
    });
    builder.addCase(deleteProject.fulfilled, (prevState, action) => {
      prevState.isLoading = false;
      prevState.project = prevState.project.filter((item) => {
        return item.project_id !== action.payload;
      });
      prevState.isError = false;
    });
    builder.addCase(deleteProject.rejected, (prevState) => {
      prevState.isLoading = false;
      prevState.project = [...prevState.todos];
      prevState.isError = true;
    });
  },
});

const projectReducer = projectSlice.reducer;
export default projectReducer;
