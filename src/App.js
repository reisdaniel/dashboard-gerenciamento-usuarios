import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/login/Login';
import UserList from './pages/UserList';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/users" element={<UserList />} />
      </Routes>
    </div>
  );
}

export default App;
