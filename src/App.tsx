import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import { RecoilRoot } from 'recoil';
import './App.css';

// pages
import Home from './pages/home/Home'
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import PreTest from './pages/preTest/PreTest';
import Interview from './pages/interview/checkSetting/CheckSetting';
import GroupProfile from './pages/groupprofile/GroupProfile';
import Result from './components/groupprofile/result/Result';
// components
import Header from './components/header/Header';
import Step1 from './components/interview/checkSetting/Step1';
import Step2 from './components/interview/checkSetting/Step2';

function App() {
  return (
    <>
      <RecoilRoot>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
                {/*헤더가 필요한 페이지 */}
                <Route element={<Header />}>
                  <Route path="/" element={<Home />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
                </Route>
                {/*헤더가 필요 없는 페이지*/}
                <Route path="/pretest" element={<PreTest />} />
                {/*면접 페이지*/}
                <Route element={<Interview />}>
                  <Route path="/interview-setting" element={<Step1/>}/>
                </Route>
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </>
  );
}

export default App;
