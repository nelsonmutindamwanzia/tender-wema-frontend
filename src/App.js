import React from 'react';
import Footer from './components/Footer';
import Landing from './components/Landing';
import Navi from './components/Navi';

function App() {
  return (
    <div className="App">
      <Navi/>
      <Landing/>
      <Footer/>
    </div>
  );
}

export default App;
