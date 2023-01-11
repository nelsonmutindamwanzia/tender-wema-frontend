import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import PublishedTender from './components/Publishtender'
import TenderResult from './components/Tender-Results'
import ActiveTenders from './components/Active-Tenders'


// import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    {/* <React.StrictMode> */}
      {/* <App /> */}
    {/* </React.StrictMode> */}
    <Routes>
    <Route path="/" element={<App />} />
    <Route path="tenders/publish" element={<PublishedTender />} />
    <Route path="tenders/results" element={<TenderResult />} />
    <Route path="tenders/active" element={<ActiveTenders />} />

    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
