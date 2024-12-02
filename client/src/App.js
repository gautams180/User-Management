import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import Dashboard from './components/Dashboard';
import Register from './components/Register';
import Profile from './components/Profile';
import Users from './components/ViewUsers';

function App() {
  return (
    <div className='bg-[#fdf0d5] text-white'>
      <Routes>

        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" 
          element={<ProtectedRoute>
              <Dashboard />
          </ProtectedRoute>} 
        />
        <Route path='/profile/:id' element={<Profile />} />
        <Route path='/users' element={<Users />} />
      </Routes>
    </div>
  );
}

export default App;
