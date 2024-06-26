import { createSlice } from '@reduxjs/toolkit';
import { addSection, deleteSection, getSection } from './sectionThunk';

const sectionSlice = createSlice({
  name: 'section',
  initialState: {
    isLoading: false,
    isError: 'false',
    section: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    // * ADD SECTION THUNK
    builder.addCase(addSection.pending, (prevState) => {
      prevState.isLoading = true;
    });
    builder.addCase(addSection.fulfilled, (prevState, action) => {
      prevState.isLoading = false;
      prevState.section.push(action.payload);
      prevState.isError = false;
    });
    builder.addCase(addSection.rejected, (prevState) => {
      prevState.isLoading = false;
      prevState.section = [...prevState.section];
      prevState.isError = true;
    });

    // * GET SECTION THUNK
    builder.addCase(getSection.pending, (prevState) => {
      prevState.isLoading = true;
    });
    builder.addCase(getSection.fulfilled, (prevState, action) => {
      prevState.isLoading = false;
      prevState.section = action.payload;
      prevState.isError = false;
    });
    builder.addCase(getSection.rejected, (prevState) => {
      prevState.isLoading = false;
      prevState.section = [...prevState.section];
      prevState.isError = true;
    });

    // * DELETE SECTION THUNK
    builder.addCase(deleteSection.pending, (prevState) => {
      prevState.isLoading = true;
    });
    builder.addCase(deleteSection.fulfilled, (prevState, action) => {
      prevState.isLoading = false;
      prevState.section = prevState.section.filter((item) => {
        if (
          item.project_id === action.payload.project_id &&
          item.section_id === action.payload.section_id
        )
          return false;
        else true;
      });
      prevState.isError = false;
    });
    builder.addCase(deleteSection.rejected, (prevState) => {
      prevState.isLoading = false;
      prevState.section = [...prevState.section];
      prevState.isError = true;
    });
  },
});

const sectionReducer = sectionSlice.reducer;
export default sectionReducer;
