import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
/* import logo from './logo.svg'; */
import './App.css';
import HomeClass from 'components/home';
import AboutClass from 'components/about';
import NAClass from 'components/unknown';
import HeaderClass from 'components/header';

function App() {
  return (
    <div className="App">
      {
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomeClass />} />
            <Route path="/about" element={<AboutClass />} />
            <Route path="/*" element={<NAClass />} />
          </Routes>
        </BrowserRouter>
      }
    </div>
  );
}

export default App;
