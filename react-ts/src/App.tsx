import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomeClass from 'components/home';
import AboutClass from 'components/about';
import NAClass from 'components/unknown';
import Formcomponent from 'components/formcomponent';

function App() {
  return (
    <div className="App">
      {
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomeClass />} />
            <Route path="/about" element={<AboutClass />} />
            <Route path="/form" element={<Formcomponent />} />
            <Route path="/*" element={<NAClass />} />
          </Routes>
        </BrowserRouter>
      }
    </div>
  );
}

export default App;
