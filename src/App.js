import React from 'react';
import Footer from './components/Footer';
import Landing from './components/Landing';
import { Route, Routes } from 'react-router-dom';
import SupplierPage from './components/supplierProfiles/SupplierPage';




function App() {
  return (
      <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/suppliers" element={<SupplierPage />} />
        
      </Routes>
        {/* <Footer/> */}

      </>
    
      
  );
}

export default App;