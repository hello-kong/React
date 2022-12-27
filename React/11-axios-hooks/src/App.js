import React, {memo} from 'react';
import MenuLink from './components/MenuLink';
import { Routes, Route } from "react-router-dom";
import Titanic from './pages/Titanic';
import TrafficAcc from './pages/TrafficAcc';
const App = memo(() => {
  return (
    <div>
      <h1>11-axios-hook</h1>
      <nav>
        <MenuLink to='/titanic'>Titanic</MenuLink>
        <MenuLink to='/traffic_acc'>TrafficAcc</MenuLink>
      </nav>
      <hr />
      <Routes>
        <Route path='/titanic' element={<Titanic />}/>
        <Route path='/traffic_acc' element={<TrafficAcc />} />
      </Routes>
    </div>
  );
});

export default App;
