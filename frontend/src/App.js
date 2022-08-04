import './App.css';
import Home from "./pages/home/Home";
import {BrowserRouter, Routes, Route  } from "react-router-dom";
import Navigation from './components/shared/navigation/Navigation';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
