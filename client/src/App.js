import './App.css';

import { Routes, Route } from "react-router-dom";

import LoginPage from './components/pages/loginPage'
import RegisterPage from './components/pages/registerPage';
import HomePage from './components/pages/homePage';

function App() {

  return (
    <div
      className='App'
    >

        <Routes>
          <Route path='/' element = {<LoginPage/>} />
          <Route path='/register' element = {<RegisterPage/>} />
          <Route path='/home' element = {<HomePage/>} />
        </Routes>
    </div>
  );
}

export default App;
