import { createAsyncThunk } from '@reduxjs/toolkit';
import { db } from '../../firebase/Firebase';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
} from 'firebase/firestore';
import { deleteSection } from '../section/sectionThunk';

export const addProject = createAsyncThunk(
  'project/addProject',
  async (name) => {
    const user = JSON.parse(localStorage.getItem('todoist_user'));
    const userRef = doc(db, 'user', user.id);
    try {
      const collectionRef = collection(userRef, 'project');
      const result = await addDoc(collectionRef, {
        project_name: name,
      });
      console.log('Project Add.');
      return { project_id: result.id, project_name: name };
    } catch (error) {
      console.log('Error: ', error);
    }
  }
);

export const getProjects = createAsyncThunk('project/getProjects', async () => {
  const user = JSON.parse(localStorage.getItem('todoist_user'));
  const userRef = doc(db, 'user', user.id);
  try {
    const collectionRef = collection(userRef, 'project');
    const snapShot = await getDocs(
      collectionRef,
      orderBy('project_name', 'asc')
    );
    const temp = [];
    snapShot.forEach((doc) => {
      temp.push({ project_id: doc.id, ...doc.data() });
    });
    return temp;
  } catch (error) {
    console.log('Error: ', error);
  }
});

export const deleteProject = createAsyncThunk(
  'project/deleteProject',
  async ({ project_id }, { rejectWithValue, getState, dispatch }) => {
    const user = JSON.parse(localStorage.getItem('todoist_user'));
    const userRef = doc(db, 'user', user.id);
    console.log('project_id', project_id);
    try {
      const collectionRef = collection(userRef, 'project');

      const { section, task } = getState();

      // section.section.forEach(item => {
      //   task.task.forEach(task => {
      //     dispatch(deleteTask({project_id, section_id: item.id, task_id: task.task.id}))
      //   });
      //   dispatch({})
      // })
      section.section.forEach((item) => {
        dispatch(deleteSection({ project_id, section_id: item.section_id }));
      });

      await deleteDoc(doc(collectionRef, project_id));

      console.log('Project Delete.');

      return project_id;
    } catch (error) {
      console.log('Error: ', error);
      console.log('Error: ', rejectWithValue.message);
    }
  }
);
