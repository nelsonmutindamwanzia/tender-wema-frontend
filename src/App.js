import Home from './components/Home';
import Login from './components/login'

import { Navbar } from "./components/Navbar";
import Signup from "./components/Signup";


function App() {
  return (
    <div >
      {/* <Home/> */}
      <Navbar/>
      <Login />
      <Signup />
      
      
    </div>
  );
}

export default App;
