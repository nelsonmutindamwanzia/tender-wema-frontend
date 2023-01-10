import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/login';
import Home from './components/Home';
import { Navbar } from './components/Navbar';


// ReactDOM.render(
//   <Router>
//     <Routes>
//       <Route path='/' element={<App/>}/>
//     </Routes>
//   </Router>
// )
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
  <React.StrictMode>
    <Router>
    <Routes>
      <Route path='/' element={<Navbar/>}/>
      <Route path='/Home' element={<App/>}/>
      <Route path='/Sign Up' element={<Signup/>}/>
      <Route path='/Login' element={<Login/>}/>
    </Routes>
  </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

