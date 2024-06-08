import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addDoc, collection, doc, onSnapshot, orderBy, query, setDoc } from "firebase/firestore";
import { db } from "../firebase/Firebase";

// export function getTodos() {
//   const q = query(collection(db, "todos"), orderBy("time", "desc"))
//   return onSnapshot(q, (querySnapshot) => {
//     return querySnapshot.docs().map(doc => (
//       { id: doc.id, data: doc.data() }
//     ))
//   })
// }

export const getTodos = createAsyncThunk("todos/getTodos", () => {
  try {
    const q = query(collection(db, "todos"), orderBy("time", "desc"))
    return onSnapshot(q, (querySnapshot) => {
      return querySnapshot.docs().map(doc => (
        { id: doc.id, data: doc.data() }
      ))
    })
  } catch (error) {
    console.log(error)
  }
})

export const addSection = createAsyncThunk(
  "todos/addSection",
  async (sectionName) => {
    try {
      const user = JSON.parse(localStorage.getItem("todoist_user"))
      const userRef = doc(db, "user", user.id)
      const subCollectionRef = collection(userRef, "section")
      const newDocRef = await addDoc(subCollectionRef, {
        sectionName
      })
      await setDoc(newDocRef, { id: newDocRef.id }, { merge: true })
      console.log("Done")
    } catch (error) {
      console.log(error)
    }
  }
);

// export const addTodo = createAsyncThunk("todos/addTodo", async (todoObj) => {
//   console.log("addTodo", doc(db, "user", JSON.stringify(localStorage.get("todoist_user")).id))
//   const userDocRef = doc(db, "user", JSON.stringify(localStorage.get("todoist_user")).id)
//   console.log("addTodo1")
//   const subCollectionRef = collection(userDocRef, "section");
//   console.log("addTodo2")
//   const docRef = await addDoc(subCollectionRef, todoObj)
//   console.log("addTodo3")
//   console.log("New created todo ID: ", docRef)
//   return docRef
// })

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
    isLoading: false,
    error: false,
  },
  reducers: {
    // addTodo: (prevState, action) => {

    //   // const docRef = 

    //   // const userDocRef = doc(db, "user", JSON.stringify(localStorage.get("todoist_user")).id)
    //   // const subCollectionRef = collection(userDocRef, "section");

    // },
    // deleteTodo: (prevState, action) => { },
    // updateTodo: (prevState, action) => { },
  },
  extraReducers: (builder) => {
    builder.addCase(getTodos.pending, (prevState, action) => {
      prevState.isLoading = true
    }),
      builder.addCase(getTodos.fulfilled, (prevState, action) => {
        prevState.isLoading = false,
          prevState.error = false,
          prevState.todos = action.payload
      }),
      builder.addCase(getTodos.rejected, (prevState, action) => {
        prevState.isLoading = false,
          prevState.error = true,
          prevState.todos = []
      })
    builder.addCase(addSection.pending, (prevState, action) => {
      prevState.isLoading = true
    }),
      builder.addCase(addSection.fulfilled, (prevState, action) => {
        prevState.isLoading = false,
          prevState.error = false,
          prevState.todos = action.payload
      }),
      builder.addCase(addSection.rejected, (prevState, action) => {
        prevState.isLoading = false,
          prevState.error = true,
          prevState.todos = [...prevState.todos]
      })
  }
})

const todoReducer = todoSlice.reducer;

// export const { "" } = todoReducer.actions;
export default todoReducer;

