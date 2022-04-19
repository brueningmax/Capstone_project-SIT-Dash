import './App.css';
import Applications from './pages/applications';
import Bootcamps from './pages/bootcamps';
import Home from './pages/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react';
import Sidebar from './components/sidebar';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/bootcamps" element={<Bootcamps />} />
        {/* <Route path="/sidebar" element={<Sidebar />} /> */}
      </Routes>
    </BrowserRouter>
  );
}


export default App;
