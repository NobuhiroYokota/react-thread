import './App.css'
import { BrowserRouter, Link, Route,Routes } from "react-router-dom";

import { GetThread } from './GetThread';
import { PostThread } from './PostThread';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GetThread />} />
          <Route path="/PostThread" element={<PostThread />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App
