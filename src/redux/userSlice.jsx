import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, doc, getDoc, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebase/Firebase";

export const fetchUserData = createAsyncThunk("user/fetchUserData", async (id) => {
  try {
    // const q = query(collection(db, "user"), orderBy("time", "desc"))
    // onSnapshot(q, (querySnapshot) => {
    //   const data = querySnapshot.docs.map(doc => {
    //     return { id: doc.id, data: doc.data() }
    //   })
    //   console.log("data", data)
    //   return data;
    // })
    const userRef = doc(db, "user", id)
    const docSnap = await getDoc(userRef)

    if (docSnap.exists()) {
      // console.log("Document data:", docSnap.data());
      // console.log("time", docSnap.data().time.seconds)
      const temp = { ...docSnap.data(), time: docSnap.data().time.seconds }
      return temp
    } else {
      console.log("No such document!");
    }
  } catch (error) {
    console.log(error)
    throw new Error(error)
  }
})

const userSlice = createSlice({
  name: "name",
  initialState: {
    userData: null,
    isLoading: false,
    error: false
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUserData.pending, (prevState, action) => {
      prevState.isLoading = true
    }),
      builder.addCase(fetchUserData.fulfilled, (prevState, action) => {
        prevState.isLoading = false,
          prevState.error = false,
          prevState.userData = action.payload
      }),
      builder.addCase(fetchUserData.rejected, (prevState, action) => {
        prevState.isLoading = false,
          prevState.error = true,
          prevState.userData = null
      })
  }
})

const userReducer = userSlice.reducer;
export default userReducer;