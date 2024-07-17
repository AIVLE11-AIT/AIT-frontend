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
import Interview from './pages/interview/interview/Intervew';
import GroupProfile from './pages/groupProfile/GroupProfile';
import InterviewMailComplete from './pages/interviewmail/InterviewMailComplete';
import InterviewMailYet from './components/interviewmail/InterviewMailYet';
import InterviewMail from './components/interviewmail/InterviewMail';
import InterviewMake from './pages/interviewMake/InterviewMake';
// components
import Header from './components/header/Header';
import Step1 from './components/interview/checkSetting/Step1';
import CheckSetting from './pages/interview/checkSetting/CheckSetting';
import InterviewExit from './pages/interview/interview/InterviewExit';
import ForgotPasswordSent from './components/forgotpassword/ForgotPasswordSent';
import InterviewMakeComplete from './pages/interviewMake/InterviewMakeComplete';
import ForgotPassword from './components/forgotpassword/ForgotPassword';
import ChangePw from './pages/changePw/ChangePw';
import InterviewerList from './pages/interviewerList/InterviewerList';
import AiResult from './pages/aiResult/AiResult';
//import Step2 from './components/interview/checkSetting/Step2';

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
                  <Route path="/group-profile" element={<GroupProfile />} />
                  <Route path="/interview-mail-complete" element={<InterviewMailComplete />} />
                  <Route path="/interview-mail-yet/:index" element={<InterviewMailYet />} />
                  <Route path="/interview-mail/:index" element={<InterviewMail />} />
                  <Route path="/interviewer-list/:index" element={<InterviewerList />} />
                  <Route path="/interview-make" element={<InterviewMake />} />
                  <Route path="/interview-make-complete/:index" element={<InterviewMakeComplete />} />
                  <Route path="/forgot-password" element={<ForgotPassword />} />
                  <Route path="/forgot-password-sent" element={<ForgotPasswordSent />} />
                  <Route path="/change-password" element={<ChangePw />} />
                  <Route path="/interviewer-result/:groupId/:interviewerId" element={<AiResult />} />
                </Route>
                {/*헤더가 필요 없는 페이지*/}
                <Route path="/pretest" element={<PreTest />} />
                <Route path="/interview/:groupId/:interviewerId" element={<Interview />} />
                <Route path="/interview-exit/:groupId/:interviewerId" element={<InterviewExit />} />
                {/*면접 페이지*/}
                <Route element={<CheckSetting />}>
                  <Route path="/interview-setting/:groupId/:interviewerId" element={<Step1/>}/>
                </Route>
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </>
  );
}

export default App;
