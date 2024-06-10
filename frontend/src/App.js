import './App.css';
import React from 'react';
import Login from './components/authentication/Login';
import Register from './components/authentication/Register';
import Chat from './components/chat/Chat';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/router/ProtectedRoute'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <ProtectedRoute exact path="/" element={<Chat />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<h1>404 Page Not Found</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
