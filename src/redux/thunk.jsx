import { createAsyncThunk } from '@reduxjs/toolkit';
import { addDoc, collection, doc, getDocs, orderBy } from 'firebase/firestore';
import { db } from '../firebase/Firebase';

export const addProject = createAsyncThunk('todos/addProject', async (name) => {
  const user = JSON.parse(localStorage.getItem('todoist_user'));
  const userRef = doc(db, 'user', user.id);
  try {
    const collectionRef = collection(userRef, 'project');
    const result = await addDoc(collectionRef, {
      project_name: name,
    });
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

export const addSection = createAsyncThunk(
  'todos/addSection',
  async ({ project_id, section_name }, { rejectWithValue, dispatch }) => {
    try {
      if (typeof section_name !== 'string') {
        throw new Error('section_name must be a string');
      }
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

      // const temp = { project_id, sectionData: [] }
      const temp = [];
      const snapShot = await getDocs(collectionRef);
      snapShot.forEach((doc) => {
        // temp["sectionData"].push({ ...doc.data() })
        temp.push({ project_id, ...doc.data() });
      });

      return temp;
    } catch (error) {
      console.log('Error: ', error);
    }
  }
);

export const addTodo = createAsyncThunk(
  'todos/addTodos',
  async ({ project_id, section_id, todoObj }, { rejectWithValue }) => {
    try {
      const user = JSON.parse(localStorage.getItem('todoist_user'));
      const userRef = doc(db, 'user', user.id);
      const projectCollectionRef = collection(userRef, 'project');
      const projectDocRef = doc(projectCollectionRef, project_id);
      const sectionCollectionRef = collection(projectDocRef, 'section');
      const sectionDocRef = doc(sectionCollectionRef, section_id);
      const result = await addDoc(sectionDocRef, todoObj);

      return {
        todo_id: result.id,
        section_id,
        project_id,
        ...todoObj,
      };
    } catch (error) {
      console.log('Error adding todo: ', error);
      return rejectWithValue(error, message);
    }
  }
);

const po = [
  {
    project_name: 'Home',
    section: [
      {
        section_name: 'What',
        todos: [{}, {}, {}, {}],
      },
    ],
  },
  {
    project_name: 'Home',
    section: [
      {
        section_name: 'What',
        todos: [{}, {}, {}, {}],
      },
    ],
  },
];
