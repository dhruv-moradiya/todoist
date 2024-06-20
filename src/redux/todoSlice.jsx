// import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit';
// import {
//   collection,
//   onSnapshot,
//   orderBy,
//   query,
// } from 'firebase/firestore';
// import { db } from '../firebase/Firebase';
// import { addProject, addSection, getProjects, getSection } from './thunk';

// export const getTodos = createAsyncThunk('todos/getTodos', () => {
//   try {
//     const q = query(collection(db, 'todos'), orderBy('time', 'asc'));
//     return onSnapshot(q, (querySnapshot) => {
//       return querySnapshot
//         .docs()
//         .map((doc) => ({ id: doc.id, data: doc.data() }));
//     });
//   } catch (error) {
//     console.log(error);
//   }
// });

// // export const addSection = createAsyncThunk(
// //   'todos/addSection',
// //   async (sectionName) => {
// //     try {
// //       const user = JSON.parse(localStorage.getItem('todoist_user'));
// //       const userRef = doc(db, 'user', user.id);
// //       const subCollectionRef = collection(userRef, 'section');
// //       const newDocRef = await addDoc(subCollectionRef, {
// //         sectionName,
// //       });
// //       await setDoc(newDocRef, { id: newDocRef.id }, { merge: true });
// //       console.log('Done');
// //     } catch (error) {
// //       console.log(error);
// //     }
// //   }
// // );

// // export const addTodo = createAsyncThunk("todos/addTodo", async (todoObj) => {
// //   console.log("addTodo", doc(db, "user", JSON.stringify(localStorage.get("todoist_user")).id))
// //   const userDocRef = doc(db, "user", JSON.stringify(localStorage.get("todoist_user")).id)
// //   console.log("addTodo1")
// //   const subCollectionRef = collection(userDocRef, "section");
// //   console.log("addTodo2")
// //   const docRef = await addDoc(subCollectionRef, todoObj)
// //   console.log("addTodo3")
// //   console.log("New created todo ID: ", docRef)
// //   return docRef
// // })

// // export async function getData() {
// //   const currentUserId = JSON.parse(localStorage.getItem("todoist_user")).id
// //   const userRef = doc(db, "user", currentUserId)
// //   const sectionRef = collection(userRef, "section")

// //   const todosRef = collection(db, "user", "section", "todos")
// //   const snapShot = await getDocs(sectionRef)
// //   const temp = []
// //   snapShot.forEach(docs => {
// //     console.log("first")
// //     console.log("doc", doc)
// //     temp.push(docs.data())
// //   })
// //   console.log("temp", temp)
// // }

// const todoSlice = createSlice({
//   name: 'todos',
//   initialState: {
//     todos: [],
//     isLoading: false,
//     error: false,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     //getProjects thunk
//     builder.addCase(getProjects.pending, (prevState, action) => {
//       prevState.isLoading = true;
//     }),
//       builder.addCase(getProjects.fulfilled, (prevState, action) => {
//         (prevState.isLoading = false),
//           (prevState.error = false),
//           (prevState.todos = [...prevState.todos, ...action.payload]);
//       }),
//       builder.addCase(getProjects.rejected, (prevState, action) => {
//         (prevState.isLoading = false),
//           (prevState.error = true),
//           (prevState.todos = [...prevState.todos]);
//       }),
//       //addProject thunk
//       builder.addCase(addProject.pending, (prevState, action) => {
//         prevState.isLoading = true;
//       }),
//       builder.addCase(addProject.fulfilled, (prevState, action) => {
//         prevState.isLoading = false;
//         prevState.error = false;
//         prevState.todos = [
//           ...prevState.todos,
//           { section: [], ...action.payload },
//         ];
//       }),
//       builder.addCase(addProject.rejected, (prevState, action) => {
//         (prevState.isLoading = false),
//           (prevState.error = true),
//           (prevState.todos = [...prevState.todos]);
//       });

//     //addSection thunk
//     builder.addCase(addSection.pending, (prevState, action) => {
//       prevState.isLoading = true;
//     }),
//       builder.addCase(addSection.fulfilled, (prevState, action) => {
//         prevState.isLoading = false;
//         prevState.error = false;
//         const { project_id, section_id, section_name } = action.payload;

//         // const obj = temp.find(
//         //   (item) => item.project_id === action.payload.project_id
//         // );
//         // obj.section.push({ ...action.payload })
//         // console.log("current", current(prevState.todos))
//         prevState.todos = prevState.todos.map((item) => {
//           if (item.project_id === project_id) {
//             return {
//               ...item,
//               section: [...item.section, { section_id, section_name }],
//             };
//           } else {
//             return item;
//           }
//         });
//       }),
//       builder.addCase(addSection.rejected, (prevState, action) => {
//         (prevState.isLoading = false),
//           (prevState.error = true),
//           (prevState.todos = [...prevState.todos]);
//       });

//     //getSection thunk
//     builder.addCase(getSection.pending, (prevState, action) => {
//       prevState.isLoading = true;
//     }),
//       builder.addCase(getSection.fulfilled, (prevState, action) => {
//         const { project_id, sectionData } = action.payload;
//         prevState.todos = prevState.todos.map((item) => {
//           if (item.project_id === project_id) {
//             return {
//               ...item,
//               section: [...item.section, ...sectionData],
//             };
//           } else {
//             return item;
//           }
//         });
//       }),
//       builder.addCase(getSection.rejected, (prevState, action) => {
//         (prevState.isLoading = false),
//           (prevState.error = true),
//           (prevState.todos = [...prevState.todos]);
//       });
//   },
// });

// const todoReducer = todoSlice.reducer;

// // export const { "" } = todoReducer.actions;
// export default todoReducer;
