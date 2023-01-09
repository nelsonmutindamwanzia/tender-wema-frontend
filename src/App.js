import React from 'react';
import './App.css';
import Navbar from './components/supplierProfiles/Navbar';
import { Route, Routes } from 'react-router-dom';
import Suppliers from './components/supplierProfiles/Suppliers';


function App() {
  return (
      <>
        <Navbar />
        <Routes>
          <Route path='/' element={<Suppliers /> } />
        </Routes>
      </>
  );
}

export default App;