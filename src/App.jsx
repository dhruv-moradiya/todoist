import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import Inbox from './page/Inbox';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Inbox />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
