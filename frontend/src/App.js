import './App.css';
import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from './components/shared/navigation/Navigation';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import StepAvatar from './pages/steps/StepAvatar/StepAvatar';
import ProtectedRoute from './components/protectedRoute/ProtectedRoute';
import StepFullName from './pages/steps/StepFullName/StepFullName';
import SemiProtectedRoute from './components/protectedRoute/SemiProtectedRoute';
import Room from './pages/rooms/Room';
import NotFound from './pages/NotFound.jsx';
import FullyProtectedRoute from './components/protectedRoute/FullyProtectedRoute';

function App() {

  const isActivated = false;//authorization
  const isAuthenticated = false;//authentication

  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        {/* guest area */}
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<NotFound />} />

        <Route path="/" element={<ProtectedRoute isAuthenticated={isAuthenticated} />} >
          {/* routing components through protected route component */}

          <Route path="/" element={<FullyProtectedRoute isActivated={isActivated} />} >
            <Route path="/room" element={<Room />} />
            <Route path="/rooms" element={<Room />} />
          </Route>

          <Route path="/activate" element={<SemiProtectedRoute isActivated={isActivated} />} >
            <Route path="/activate/1" element={<StepFullName />} />
            <Route path="/activate/2" element={<StepAvatar />} />
          </Route>

        </Route>





      </Routes>
    </BrowserRouter>
  );
}

export default App;
