//  123456eroR@12#
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
// import { getProjects } from './redux/thunk';
import { useSelector } from 'react-redux';
import { getProjects } from './redux/project/projectThunk';

import { TodoContextProvider } from './context/TodoContext';

import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase/Firebase';
import { fetchUserData, setUser } from './redux/userSlice';

import Layout from './layout/Layout';
import Inbox from './page/Inbox';
import Today from './page/Today';
import Project from './page/Project';
import SignUp from './page/SignUp';
import SignIn from './page/SignIn';
import ProtectedRoute from './guard/ProtectedRoute';
<<<<<<< HEAD
import Upcoming from './page/Upcoming';
import Completed from './page/Completed';

function App() {
  const dispatch = useDispatch();

=======

function App() {
  const dispatch = useDispatch();
  // const user = JSON.parse();
>>>>>>> 67e6dd0f589a3c78f5b87dacf850c99af0b9fae7
  const [user, setUser] = useState(
    localStorage.getItem('todoist_user') || null
  );

  useEffect(() => {
    dispatch(getProjects());
  }, []);

<<<<<<< HEAD
  // const project = useSelector((store) => store.project);
=======
  const project = useSelector((store) => store.project);

  // useEffect(() => {
  //   if (!user) {
  //     dispatch(
  //       fetchUserData(JSON.parse(localStorage.getItem('todoist_user')).id)
  //     );
  //   }
  // }, []);
>>>>>>> 67e6dd0f589a3c78f5b87dacf850c99af0b9fae7

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log('UserAuth', user);
      if (user) {
        dispatch(setUser({ id: user.uid, email: user.email }));
      } else {
<<<<<<< HEAD
        dispatch(setUser(""));
=======
        dispatch(setUser(null));
>>>>>>> 67e6dd0f589a3c78f5b87dacf850c99af0b9fae7
      }
    });
    return () => unsubscribe();
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
                  <ProtectedRoute user={user}>
                    <Inbox />
                  </ProtectedRoute>
                }
              />
              <Route path="/today" element={<Today />} />
              <Route path="/:project_id" element={<Project />} />
<<<<<<< HEAD
              <Route path="/upcoming" element={<Upcoming />} />
              <Route path="/completed" element={<Completed />} />
=======
>>>>>>> 67e6dd0f589a3c78f5b87dacf850c99af0b9fae7
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
