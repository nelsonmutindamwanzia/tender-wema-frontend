// import React from 'react';
// import './App.css';
// import Suppliers from './components/supplierProfiles/Suppliers';

// function App() {
//   return (
//     <div className="App">
//       <h1>Tender Wema</h1>
//       <Suppliers />
//     </div>
//   );
// }

// export default App;

import React from 'react';
import './App.css';
import Navbar from './components/supplierProfiles/Navbar';
import { Route, Routes } from 'react-router-dom';
//import Suppliers from './components/supplierProfiles/Suppliers';


function App() {
  return (
      <>
        <Navbar />
        <Routes>
          <Route path='/'   />
        </Routes>
      </>
  );
}

export default App;