import { createAsyncThunk } from '@reduxjs/toolkit';
<<<<<<< HEAD
import {
  addDoc,
  collection,
  doc,
  getDocs,
  orderBy,
  updateDoc,
} from 'firebase/firestore';
=======
import { addDoc, collection, doc } from 'firebase/firestore';
>>>>>>> 67e6dd0f589a3c78f5b87dacf850c99af0b9fae7
import { db } from '../../firebase/Firebase';

export const addTask = createAsyncThunk(
  'task/addTask',
  async ({ project_id, section_id, taskObj }, { getState, dispatch }) => {
    console.log('taskObj', project_id, section_id, taskObj);
    try {
      const user = JSON.parse(localStorage.getItem('todoist_user'));
      if (!user) {
        throw new Error('No user found in local storage');
      }
      const userRef = doc(db, 'user', user.id);
      const projectCollectionRef = collection(userRef, 'project');
      const projectDocRef = doc(projectCollectionRef, project_id);
      const sectionCollectionRef = collection(projectDocRef, 'section');
      const sectionDocRef = doc(sectionCollectionRef, section_id);
      const taskCollectionRef = collection(sectionDocRef, 'task');

      const result = await addDoc(taskCollectionRef, taskObj);

      console.log('Task added successfully.');
      return {
        task_id: result.id,
        taskData: taskObj,
      };
    } catch (error) {
      console.error('Error adding task: ', error);
      return Promise.reject(error);
    }
  }
);
