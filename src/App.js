import './App.css';
import Blog from './Blog.js';
import React, { useState } from 'react';
import BlogList from './BlogList';
import './blog.css';
import Welcome from './Welcome';



function App() {
  const [current, setCurrent] = useState();
  const [blogShowing, setBlogShowing] = useState(false);

  return (
    <>
      <div className='header'><h1>My Blog Site</h1></div>
      <div className='blogList'><BlogList setCurrent={setCurrent} setBlogShowing={setBlogShowing} /></div>
      <div className='blog'>{blogShowing ? <Blog id={current} /> : <Welcome />}</div>
    </>
  )
}

export default App;