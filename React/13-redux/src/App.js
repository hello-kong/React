import React, { memo } from 'react';
import {  Routes, Route } from "react-router-dom";

import MenuLink from './components/MenuLink';
import Counter from './pages/Counter';
import Department from './pages/Department';
import News from './pages/News';
import MovieRank from './pages/MovieRank';
import ImageSearch from './pages/ImageSearch';

const App = memo(() => {
  return (
    <div>
      <h1>13-REDUX</h1>
      <nav>
        <MenuLink to='/counter'>Counter</MenuLink>
        <MenuLink to='/department'>Department</MenuLink>
        <MenuLink to='/news'>News</MenuLink>
        <MenuLink to='/movie_rank'>MovieRank</MenuLink>
        <MenuLink to='/image_search'>ImageSearch</MenuLink>
      </nav>
      <hr />
      <Routes>
        <Route path='/counter' element={<Counter />} />
        <Route path='/department' element={<Department />} />
        <Route path='/news' element={<News />} />
        <Route path='/movie_rank' element={<MovieRank />} />
        <Route path='/image_search' element={<ImageSearch />} />
      </Routes>
    </div>
  );
});

export default App;
