import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
// import todoReducer from './todoSlice';
import projectReducer from './project/projectSlice';
import sectionReducer from './section/sectionSlice';
import taskReducer from './task/taskSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    // todos: todoReducer,
    project: projectReducer,
    section: sectionReducer,
    task: taskReducer,
  },
});
export default store;
