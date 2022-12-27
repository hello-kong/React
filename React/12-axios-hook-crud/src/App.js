import React, { memo } from 'react';
import {  Routes, Route } from "react-router-dom";

import GradeList from './pages/GradeList';
import GradeAdd from './pages/GradeAdd';
import GradeEdit from './pages/GradeEdit';

const App = memo(() => {
  return (
    <div>
      <h1>12-Axios-Hooks-CRUD</h1>

      <Routes>
        <Route path='/' exapt={true} element={<GradeList />} />
        <Route path='/add' element={<GradeAdd />} />
        <Route path='/edit/:id' element={<GradeEdit />} />
      </Routes>
    </div>
  );
});

export default App;
