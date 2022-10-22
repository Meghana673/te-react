import logo from './logo.svg';
import './App.css';

import NavBar from './Components/nav';
import Home from './Components/home'
//Configure the routing paths 
import { Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
       <Routes>
      <Route path="home" element={<Home/>}></Route>
      {/* <Route path="care" element={<Care/>}></Route> */}

     </Routes>
    </div>
  );
}

export default App;
