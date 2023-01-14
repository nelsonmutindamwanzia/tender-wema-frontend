import React from 'react';
import Footer from './components/Footer';
import Landing from './components/Landing';
import Navi from './components/Navi';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <Navi/>
      <Landing/>
      <Footer/>
      {/* <Sidebar/> */}
    </div>
  );
}

export default App;
