import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import { Applinks } from './utils/Linkings';
import Login from './pages/Login';
import Signup from './pages/Signup';
import LandingPage from './pages/LandingPage';
import GlobalValues from './context/Context';
import VerifyOtp from './pages/VerifyOtp';
import HomePage from './pages/HomePage';
import Request from './pages/Request';
import Profile from './pages/Profile';

const router = createBrowserRouter([
  {
    path: Applinks.Landing.path,
    element: <LandingPage/>
  },
  {
    path: Applinks.Login.path,
    element: <Login/>
  },
  {
    path: Applinks.Signup.path,
    element: <Signup/>
  },
  {
    path: Applinks.VerifyOtp.path,
    element: <VerifyOtp/>
  },
  {
    path: Applinks.Home.path,
    element: <HomePage/>
  },
  {
    path: Applinks.Request.path,
    element: <Request/>
  },
  {
    path: Applinks.Profile.path,
    element: <Profile/>
  }

]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalValues>
      <RouterProvider router={router}/>
    </GlobalValues>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
