import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import todoReducer from './todoSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    todos: todoReducer,
  },
});
export default store;
