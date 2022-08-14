import React from 'react';
import './assets/styles/app.scss';
import Canvas from './components/Canvas';
import SettingBar from './components/SettingBar';
import Toolbar from './components/Toolbar';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <Routes>
          <Route path='/'
          element={[<Navigate to={`f${(+new Date).toString(16)}`} />, <SettingBar />]} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
