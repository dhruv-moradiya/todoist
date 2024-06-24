import { createSlice, current } from '@reduxjs/toolkit';
import { addSection, getSection } from './sectionThunk';

const sectionSlice = createSlice({
  name: 'section',
  initialState: {
    isLoading: false,
    isError: 'false',
    section: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addSection.pending, (prevState) => {
      prevState.isLoading = true;
    });
    builder.addCase(addSection.fulfilled, (prevState, action) => {
      // console.log('prevState', current(prevState.section));
      prevState.isLoading = false;
      prevState.section.push(action.payload);
      prevState.isError = false;
    });
    builder.addCase(addSection.rejected, (prevState) => {
      prevState.isLoading = false;
      prevState.section = [...prevState.section];
      prevState.isError = true;
    });

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
  },
});

const sectionReducer = sectionSlice.reducer;
export default sectionReducer;
