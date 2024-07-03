import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import './App.css';

// pages
import Home from './pages/home/Home'
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import PreTest from './pages/preTest/PreTest';
import GroupProfile from './pages/groupprofile/GroupProfile';
import Result from './components/groupprofile/result/Result';
// components
import Header from './components/header/Header';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
              {/*헤더가 필요한 페이지 */}
              <Route element={<Header />}>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/groupprofile" element={<GroupProfile />} />
                <Route path="/result" element={<Result />} />
              </Route>
              {/*헤더가 필요 없는 페이지*/}
              <Route path="/pretest" element={<PreTest />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
