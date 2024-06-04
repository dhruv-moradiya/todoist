import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import Inbox from './page/Inbox';
import { TodoContextProvider } from './context/TodoContext';
import SignIn from './page/SignIn';
import SignUp from './page/SignUp';

function App() {
  return (
    <>
      <TodoContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Inbox />} />
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
