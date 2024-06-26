import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
} from 'firebase/firestore';
import { db } from '../../firebase/Firebase';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { deleteTask } from '../task/taskThunk';

export const addSection = createAsyncThunk(
  'section/addSection',
  async ({ project_id, section_name }, { rejectWithValue }) => {
    try {
      const user = JSON.parse(localStorage.getItem('todoist_user'));
      const userRef = doc(db, 'user', user.id);
      const projectCollectionRef = collection(userRef, 'project');
      const projectDocRef = doc(projectCollectionRef, project_id);
      const collectionRef = collection(projectDocRef, 'section');

      const result = await addDoc(collectionRef, { section_name });

      return {
        section_id: result.id,
        section_name: section_name,
        project_id: project_id,
      };
    } catch (error) {
      console.error('Error adding section:', error);
      return rejectWithValue(error.message);
    }
  }
);

export const getSection = createAsyncThunk(
  'section/getSection',
  async (project_id) => {
    try {
      const user = JSON.parse(localStorage.getItem('todoist_user'));
      const userRef = doc(db, 'user', user.id);
      const projectCollectionRef = collection(userRef, 'project');
      const projectDocRef = doc(projectCollectionRef, project_id);
      const collectionRef = collection(projectDocRef, 'section');

      const temp = [];
      const snapShot = await getDocs(
        collectionRef,
        orderBy('section_name', 'asc')
      );
      snapShot.forEach((doc) => {
        temp.push({ project_id, ...doc.data(), section_id: doc.id });
      });
      return temp;
    } catch (error) {
      console.log('Error: ', error);
    }
  }
);

export const deleteSection = createAsyncThunk(
  'section/deleteSection',
  async (
    { project_id, section_id },
    { rejectWithValue, dispatch, getState }
  ) => {
    try {
      const user = JSON.parse(localStorage.getItem('todoist_user'));
      const userRef = doc(db, 'user', user.id);
      const projectCollectionRef = collection(userRef, 'project');
      const projectDocRef = doc(projectCollectionRef, project_id);
      const sectionCollectionRef = collection(projectDocRef, 'section');
      const sectionDocRef = doc(sectionCollectionRef, section_id);


      const { task } = getState();

      console.log('Delete Section.', task.task);

      task.task.forEach((item) => {
        dispatch(
          deleteTask({
            project_id: item.project_id,
            section_id: item.section_id,
            task_id: item.task_id,
          })
        );
      });
      await deleteDoc(sectionDocRef);

      return { project_id, section_id };
    } catch (error) {
      console.log(rejectWithValue.message);
    }
  }
);
