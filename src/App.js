
import './App.css';
// import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Customers from './pages/Customers';
import MapMarkers from './pages/MapMarkers';
import RoModule from './pages/RoModule';
import UserPage from './pages/UserPage';
import Sidebar from './components/Sidebar';
import Profile from './pages/Profile';
import AddUser from './pages/AddUser';
import EditUser from './pages/EditUser';

function App() {

  return (
    <>
   
      <BrowserRouter>
        <Sidebar>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/map-marker" element={<MapMarkers />} />
            <Route path="/ro-models" element={<RoModule />} />
            <Route path="/users" element={<UserPage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/add-user" element={<AddUser />} />
            <Route path="/edit-user" element={<EditUser />} />
          </Routes>
        </Sidebar>
      </BrowserRouter>
    </>
  );
}

export default App;
