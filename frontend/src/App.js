import './App.css';
import React from 'react';
import Login from './components/authentication/Login';
import Register from './components/authentication/Register';
import Chat from './components/chat/Chat';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/router/ProtectedRoute';
import { library } from '@fortawesome/fontawesome-svg-core';
import { BrowserRouter as Switch } from 'react-router-dom';
import { faSmile, faImage } from '@fortawesome/free-regular-svg-icons';
import { faSpinner, faEllipsisV, faUserPlus, faSignOutAlt, faTrash, faCaretDown, faUpload, faTimes, faBell } from '@fortawesome/free-solid-svg-icons';

library.add(faSmile, faImage, faSpinner, faEllipsisV, faUserPlus, faSignOutAlt, faTrash, faCaretDown, faUpload, faTimes, faBell);

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Chat />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<h1>404 Page Not Found</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
