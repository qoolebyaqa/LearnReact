import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Formcomponent from 'components/formcomponent';
import AboutSection from 'components/about';
import HomePage from 'components/home';
import UnknownPage from 'components/unknown';

function App() {
  return (
    <div className="App">
      {
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutSection />} />
            <Route path="/form" element={<Formcomponent key={''} />} />
            <Route path="/*" element={<UnknownPage />} />
          </Routes>
        </BrowserRouter>
      }
    </div>
  );
}

export default App;
