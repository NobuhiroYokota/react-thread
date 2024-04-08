import './App.css'
import { BrowserRouter, Link, Route,Routes } from "react-router-dom";

import { GetThread } from './GetThread';
import { PostThread } from './PostThread';
import { Postposts } from './Postposts';

const App = () => {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<GetThread />} />
            <Route path="/PostThread" element={<PostThread />} />
            <Route path="/:postId" element={<Postposts />}/>
          </Routes>
      </BrowserRouter>
    </>
  );
};


export default App
