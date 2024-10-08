import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import { RecoilRoot } from 'recoil';
// import Auth from '/auth';

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
import ContactBoardCreate from './pages/contact/contactboardcreate/ContactBoardCreate';
import ContactBoardDetail from './pages/contact/contactboarddetail/ContactBoardDetail';
import ContactBoardList from './pages/contact/contactboardlist/ContactBoardList';
import ContactBoardModify from './pages/contact/contactboardmodify/ContactBoardModify';
import ChangePw from './pages/changePw/ChangePw';
import InterviewerList from './pages/interviewerList/InterviewerList';
import AiResult from './pages/aiResult/AiResult';
import InterviewMakeComplete from './pages/interviewMake/InterviewMakeComplete';
import CheckSetting from './pages/interview/checkSetting/CheckSetting';
import InterviewExit from './pages/interview/interview/InterviewExit';
import TermsOfService from './pages/terms/TermsOfService'; // 서비스 이용약관
import PrivacyPolicy from './pages/terms/PrivacyPolicy'; // 개인정보 처리 방침
// components
import Header from './components/header/Header';
import Step1 from './components/interview/checkSetting/Step1';
import ForgotPasswordSent from './components/forgotpassword/ForgotPasswordSent';
import ForgotPassword from './components/forgotpassword/ForgotPassword';
import InterviewUpdateForm from './pages/interviewMake/InterviewUpdateForm';
import Intro from './pages/intro/Intro';
import AgreeForm from './pages/signup/AgreeForm';

function App() {
  // const AuthHome = Auth(Home, null);


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
                  <Route path="/contact-board-create" element={<ContactBoardCreate />} />
                  <Route path="/contact-board-detail/:id" element={<ContactBoardDetail />} />
                  <Route path="/contact-board-list" element={<ContactBoardList />} />
                  <Route path="/contact-board-modify/:id" element={<ContactBoardModify />} />
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
                  <Route path="/terms-of-service" element={<TermsOfService />} />
                  <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                  <Route path="/interview/update/:groupId" element={<InterviewUpdateForm />} />
                  <Route path="/intro" element={<Intro />} />
                  <Route path="/agree" element={<AgreeForm/>} />
                </Route>
                {/*헤더가 필요 없는 페이지*/}
                <Route path="/pretest/:groupId/:interviewerId" element={<PreTest />} />
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
