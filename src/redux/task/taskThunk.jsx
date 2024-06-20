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
<<<<<<< HEAD
    console.log(
      'TaskThunk => taskObj',
      project_id,
      section_id,
      '\n TaskObj \n',
      taskObj
    );
=======
    console.log('taskObj', project_id, section_id, taskObj);
>>>>>>> 67e6dd0f589a3c78f5b87dacf850c99af0b9fae7
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

<<<<<<< HEAD
      const { task } = getState();

      const result = await addDoc(taskCollectionRef, {
        ...taskObj,
        order: task.task.length + 1,
      });
=======
      const result = await addDoc(taskCollectionRef, taskObj);
>>>>>>> 67e6dd0f589a3c78f5b87dacf850c99af0b9fae7

      console.log('Task added successfully.');
      return {
        task_id: result.id,
<<<<<<< HEAD
        ...taskObj,
        order: task.task.length + 1,
=======
        taskData: taskObj,
>>>>>>> 67e6dd0f589a3c78f5b87dacf850c99af0b9fae7
      };
    } catch (error) {
      console.error('Error adding task: ', error);
      return Promise.reject(error);
    }
  }
);
<<<<<<< HEAD

export const getTask = createAsyncThunk(
  'task/getTask',
  async ({ project_id }, { getState }) => {
    try {
      const user = JSON.parse(localStorage.getItem('todoist_user'));
      if (!user) {
        throw new Error('No user found in local storage');
      }
      const userRef = doc(db, 'user', user.id);
      const projectCollectionRef = collection(userRef, 'project');
      const projectDocRef = doc(projectCollectionRef, project_id);
      const sectionCollectionRef = collection(projectDocRef, 'section');

      const { section } = getState();
      const temp = [];

      for (const { section_id } of section.section) {
        const sectionDocRef = doc(sectionCollectionRef, section_id);
        const taskCollectionRef = collection(sectionDocRef, 'task');

        const snapShot = await getDocs(
          taskCollectionRef,
          orderBy('task_add_date', 'asc')
        );
        snapShot.forEach((doc) => {
          temp.push({
            task_id: doc.id,
            ...doc.data(),
            project_id,
            section_id,
          });
        });
      }
      return temp;
    } catch (error) {
      console.log('Error at getTask Thunk: ', error);
    }
  }
);

export const completeTask = createAsyncThunk(
  'task/completeTask',
  async ({ project_id, section_id, task_id }, { rejectWithValue }) => {
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
      const taskDocRef = doc(taskCollectionRef, task_id);

      await updateDoc(taskDocRef, { completed: true });

      console.log('Task Done');

      return { project_id, section_id };
    } catch (error) {
      console.error('Error completing task:', error);
      return rejectWithValue(error.message);
    }
  }
);
=======
>>>>>>> 67e6dd0f589a3c78f5b87dacf850c99af0b9fae7
