import React from 'react';
// Changed BrowserRouter to HashRouter
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Project from './components/Projects';
import Contact from './components/Contact';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const isLoggedIn = sessionStorage.getItem('isLoggedIn');
  return isLoggedIn ? <>{children}</> : <Navigate to="/login" />;
};

function App() {
  return (
    /* 
       When using HashRouter, you generally do not need the 'basename' prop 
       because the routing starts after the '#' symbol.
    */
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />
        {/* Redirect any unknown hash routes to Home */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;