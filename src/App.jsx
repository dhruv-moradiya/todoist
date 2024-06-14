// 123456eroR@12#
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { getProjects } from './redux/thunk';
import { useSelector } from 'react-redux';

import { TodoContextProvider } from './context/TodoContext';

import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase/Firebase';
import { setUser } from './redux/userSlice';

import Layout from './layout/Layout';
import Inbox from './page/Inbox';
import Today from './page/Today';
import Project from './page/Project';
import SignUp from './page/SignUp';
import SignIn from './page/SignIn';

function ProtectedRoute({ children }) {
  const user = useSelector((state) => state.user.userData);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  return user ? children : null;
}

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProjects());
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, photoURL, email } = user;
        dispatch(setUser({ id: uid, displayName, photoURL, email }));
      } else {
        dispatch(setUser(null));
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
              <Route index element={<ProtectedRoute><Inbox /></ProtectedRoute>} />
              <Route path="/today" element={<Today />} />
              <Route path="/:project_id" element={<Project />} />
            </Route>
            <Route path="/login" element={<SignIn />} />
            <Route path="/sighup" element={<SignUp />} />
          </Routes>
        </BrowserRouter>
      </TodoContextProvider>
    </>
  );
}

export default App;
