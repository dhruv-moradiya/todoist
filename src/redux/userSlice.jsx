import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/Firebase';

export const fetchUserData = createAsyncThunk(
  'user/fetchUserData',
  async (id) => {
    try {
      const userRef = doc(db, 'user', id);
      const docSnap = await getDoc(userRef);

      if (docSnap.exists()) {
        const temp = { ...docSnap.data(), time: docSnap.data().time.seconds };
        return temp;
      } else {
        console.log('User not found!');
      }
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }
);

const userSlice = createSlice({
  name: 'name',
  initialState: {
    userData: null,
    isLoading: false,
    error: false,
  },
  reducers: {
    setUser: (prevState, action) => {
      prevState.userData = action.payload;
    },
  },
  extraReducers: (builder) => {
    // builder.addCase(fetchUserData.pending, (prevState, action) => {
    //   prevState.isLoading = true;
    // }),
    //   builder.addCase(fetchUserData.fulfilled, (prevState, action) => {
    //     (prevState.isLoading = false),
    //       (prevState.error = false),
    //       (prevState.userData = action.payload);
    //   }),
    //   builder.addCase(fetchUserData.rejected, (prevState, action) => {
    //     (prevState.isLoading = false),
    //       (prevState.error = true),
    //       (prevState.userData = null);
    //   });
  },
});

const userReducer = userSlice.reducer;

export const { setUser } = userSlice.actions;
export default userReducer;
