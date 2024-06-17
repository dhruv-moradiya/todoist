import { addDoc, collection, doc, getDocs, orderBy } from 'firebase/firestore';
import { db } from '../../firebase/Firebase';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const addProject = createAsyncThunk('todos/addProject', async (name) => {
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
});

export const getProjects = createAsyncThunk('todos/getProjects', async () => {
  const user = JSON.parse(localStorage.getItem('todoist_user'));
  const userRef = doc(db, 'user', user.id);
  try {
    const collectionRef = collection(userRef, 'project');
    const snapShot = await getDocs(
      collectionRef,
      orderBy('project_name', 'desc')
    );
    const temp = [];
    snapShot.forEach((doc) => {
      temp.push({ project_id: doc.id, ...doc.data(), section: [] });
    });
    return temp;
  } catch (error) {
    console.log('Error: ', error);
  }
});