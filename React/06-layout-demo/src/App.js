/**
 * @filename: App.js
 * @description: 레이웃 구성 컨테이너
 * @author: Lee K.H (leekh4232@gmail.com)
 */

/** 패키지 참조 */
// 리액트 기본
import React from 'react';
// 라우팅 처리
import {  Routes, Route } from "react-router-dom";
// 모든 페이지 공용 컴포넌트
import Header from './common/Header';
import Navbar from './common/Navbar';
import Footer from './common/Footer';
// 페이지 -> import 대상 경로가 폴더명일 경우 해당 폴더의 index.js를 가져온다.
import Main from './pages/Main';

/**
 * 기본 레이아웃 구성 함수
 * @returns {JSX.Element}
 */

const App = () => {
  return (
      <div>
          <Header />
          <Navbar />
          <Routes>
            <Route path='/' exact={true} element={<Main />} />
          </Routes>
          <Footer />
      </div>
  );
}

export default App;
