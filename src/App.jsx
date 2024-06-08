import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import Inbox from './page/Inbox';
import { TodoContextProvider } from './context/TodoContext';
import SignIn from './page/SignIn';
import SignUp from './page/SignUp';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <>
      <Provider store={store}>
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
      </Provider>
    </>
  );
}

export default App;
