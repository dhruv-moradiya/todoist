<<<<<<< HEAD
import { addDoc, collection, doc, getDocs, orderBy } from 'firebase/firestore';
=======
import { addDoc, collection, doc, getDocs } from 'firebase/firestore';
>>>>>>> 67e6dd0f589a3c78f5b87dacf850c99af0b9fae7
import { db } from '../../firebase/Firebase';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const addSection = createAsyncThunk(
  'todos/addSection',
  async ({ project_id, section_name }, { rejectWithValue }) => {
    try {
      // if (typeof section_name !== 'string') {
      //   throw new Error('section_name must be a string');
      // }
      const user = JSON.parse(localStorage.getItem('todoist_user'));
      const userRef = doc(db, 'user', user.id);
      const projectCollectionRef = collection(userRef, 'project');
      const projectDocRef = doc(projectCollectionRef, project_id);
      const collectionRef = collection(projectDocRef, 'section');
      console.log('collectionRef', collectionRef);

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
  'todos/getSection',
  async (project_id) => {
    try {
      const user = JSON.parse(localStorage.getItem('todoist_user'));
      const userRef = doc(db, 'user', user.id);
      const projectCollectionRef = collection(userRef, 'project');
      const projectDocRef = doc(projectCollectionRef, project_id);
      const collectionRef = collection(projectDocRef, 'section');

      // const temp = { project_id, sectionData: [] };
      const temp = [];
<<<<<<< HEAD
      const snapShot = await getDocs(
        collectionRef,
        orderBy('section_name', 'asc')
      );
=======
      const snapShot = await getDocs(collectionRef);
>>>>>>> 67e6dd0f589a3c78f5b87dacf850c99af0b9fae7
      snapShot.forEach((doc) => {
        // temp['sectionData'].push({ section_id: doc.id, ...doc.data() });
        temp.push({ project_id, ...doc.data(), section_id: doc.id });
      });
      return temp;
    } catch (error) {
      console.log('Error: ', error);
    }
  }
);
