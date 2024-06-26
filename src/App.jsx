//123456eroR@12#
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { setUserState } from './redux/userSlice'
import { getProjects } from './redux/project/projectThunk';

import { TodoContextProvider } from './context/TodoContext';

import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase/Firebase';

import Layout from './layout/Layout';
import Inbox from './page/Inbox';
import Today from './page/Today';
import Project from './page/Project';
import SignUp from './page/SignUp';
import SignIn from './page/SignIn';
import ProtectedRoute from './guard/ProtectedRoute';
import Upcoming from './page/Upcoming';
import Completed from './page/Completed';

function App() {
  const dispatch = useDispatch();

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('todoist_user'))
  );

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (userAuth) => {
      const user = JSON.parse(localStorage.getItem('todoist_user'))
      console.log("user", user);
      if (userAuth) {
        console.log("userAuth");
        dispatch(
          setUserState(user)
        );
      } else {
        dispatch(setUserState(""));
      }
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    dispatch(getProjects());
  }, []);

  return (
    <>
      <TodoContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route
                index
                element={
                  <ProtectedRoute >
                    <Inbox />
                  </ProtectedRoute>
                }
              />
              <Route path="/today" element={<Today />} />
              <Route path="/:project_id" element={<Project />} />
              <Route path="/upcoming" element={<Upcoming />} />
              <Route path="/completed" element={<Completed />} />
            </Route>
            <Route path="/login" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </BrowserRouter>
      </TodoContextProvider>
    </>
  );
}

export default App;
