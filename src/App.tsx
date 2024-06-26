import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import './App.css';

// pages
import Home from './pages/home/Home'
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
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
              </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
