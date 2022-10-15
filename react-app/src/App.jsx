import React, {useState} from 'react';
import {
  Routes,
  Route,
  NavLink
} from 'react-router-dom';


import { HomePage } from './pages/HomePage';
import { Screener } from './pages/Screener';
import { Help } from './pages/Help';
import { NotFoundPage } from './pages/NotFoundPage';

import { Settings } from './components/modal/Settings'

function App() {
  const BaseStyle ="App"
  const [colorTheme, setColorTheme] = useState('light')
  const ChangeTheme = () => {
    colorTheme == 'light' ? setColorTheme('dark') : setColorTheme('light')
  }
  const [settingsModal, setSettingsModal] = useState('show')
  return (
    <div className={[BaseStyle, colorTheme].join(" ")}>
      <header className="App-header">
        <div className="header-ridht">
          <NavLink to="/screener">Screener</NavLink>
          <NavLink to="/help">Help</NavLink>
        </div>
        <div className="headrer-left">

          <NavLink to="/settings">Settings</NavLink>
          <button onClick={ChangeTheme}>
            <h1>
              {colorTheme=="light"?"светлая":"темная"}
            </h1>
          </button>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/screener" element={<Screener />} />
        <Route path="/help" element={<Help />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
