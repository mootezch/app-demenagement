import React from 'react';
import { useAuth } from './context/AuthContext';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { 
  Navigate,
  Outlet,
} from 'react-router-dom'
import SideBar from './components/Sidebar';
import Login from './pages/Login/Login';
import './App.css';
import Dashboard from './pages/dashboard/dashboard'
import {Toaster} from 'react-hot-toast'
import Users from './pages/Users/users';
import Projects from './pages/Project/projet';
import Ticket from './pages/ticket/ticket';
import Profile from './pages/profile';







const ProtectedRoute = ({
  isAuthenticated,
  redirectPath = '/login',
  children,
}) => {


  console.log({auth : isAuthenticated})
  if (!isAuthenticated) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};

function App() {

  const { state, logout } = useAuth();

  let { isAuthenticated } = state


  return (
    <Router>
        <SideBar logout={logout}>
          <Toaster />
          <Routes>
            <Route path="/login" element={<Login />} />

            
            <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
              <Route path="/" element={<Dashboard />} />
              <Route path="/users" element={<Users />} />
              <Route path="/projet" element={<Projects />} />
              <Route path="/ticket" element={<Ticket/>} />
              <Route path="/profile" element={<Profile />} /> {/* Route to render the Profile component */}

              

            </Route>
            <Route path="*" element={<p>There's nothing here: 404!</p>} />

          </Routes>
        </SideBar>
    </Router>
  );
}

export default App;
