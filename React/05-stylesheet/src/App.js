import React from 'react';
// LInk대신 NavLink를 import한다.
import { NavLink, Routes, Route } from "react-router-dom";

import InlineCss from './pages/InlineCss';
import CssClass  from './pages/CssClass';
import CssModule from './pages/CssModule';
import Scss from './pages/Scss';
import ScssModule from './pages/ScssModule';
import StyledComponent from './pages/StyledComponent';
import Responsive from './pages/Responsive';
import News from './pages/News';

// CSS 파일도 import 해야 한다.
import './assets/css/menu.css';

// 전역 SCSS 적용을 위한 StyledComponent
import GlobalStyles from './GlobalStyles';

// reset-css
// import { Reset } from 'styled-reset';

//

function App() {
  // 페이지 타이틀에 적용할 InlineCss 정의
  // --> CSS는 JS속성으로 기술해야 함.
  // -> 전체구조는 JSON객체. (단위가 포함된 수치값의 경우 문자열로 표기, 한쌍의 속성-값 뒤에는 세미콜론이 아님 콤마가 위치해야 함.)
  const myStyle = {
      fontWeight: 'bold',
      color: '#b82514',
      textDecoration: 'none',
      marginRight: '10px'
  };

  return (
   <div>
      {/* <Reset /> */}
      <GlobalStyles />
      <h1 style={myStyle}>05-stylesheet</h1>

      <nav>
        {/* 
        NavLink 구성 
        - 기본 Link컴포넌트의 기능에 className, activeCalssName 속성이 추가된 객체
        - calssName : 기본적으로 적용될 CSS클래스 이름
        - 현재 브라우저가 위치하는 URL과 동일한 주소를 갖는 링크에게 active 클래스가 자동으로 적용된다.
        active 클래스에 대한 style의 존재 유무와는 별개임.
        */}
        <NavLink className='normalLink' to='/inline_css'>
          InlineCss
        </NavLink>&nbsp;|&nbsp;
        <NavLink className='normalLink' to='/css_class'>
          CssClass
        </NavLink>&nbsp;|&nbsp;
        <NavLink className='normalLink' to='/css_module'>
          CssModule
        </NavLink>&nbsp;|&nbsp;
        <NavLink className='normalLink' to='/scss'>
          Scss
        </NavLink>&nbsp;|&nbsp;
        <NavLink className='normalLink' to='/scss_module'>
          ScssModule
        </NavLink>&nbsp;|&nbsp;
        <NavLink className='normalLink' to='/styled_component'>
          StyledComponent
        </NavLink>&nbsp;|&nbsp;
        <NavLink className='normalLink' to='/responsive'>
          Responsive
        </NavLink>&nbsp;|&nbsp;
        <NavLink className='normalLink' to='/news'>
          News(Demo)
        </NavLink>
      </nav>
      <hr />

      <Routes>
        <Route path='/inline_css' element={<InlineCss/>} />
        <Route path='/css_class' element={<CssClass/>} />
        <Route path='/css_module' element={<CssModule/>} />
        <Route path='/scss' element={<Scss/>} />
        <Route path='/scss_module' element={<ScssModule/>} />
        <Route path='/styled_component' element={<StyledComponent/>} />
        <Route path='/responsive' element={<Responsive/>} />
        <Route path='/news/*' element={<News/>} />
      </Routes>
   </div>
  );
}

export default App;
