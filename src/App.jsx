import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { getProjects } from './redux/thunk';

import { TodoContextProvider } from './context/TodoContext';

import Layout from './layout/Layout';
import Inbox from './page/Inbox';
import Today from './page/Today';
import SignIn from './page/SignIn';
import SignUp from './page/SignUp';
import Project from './page/Project';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProjects());
  }, []);

  return (
    <>
      <TodoContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Inbox />} />
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
