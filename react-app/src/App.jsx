import React, {useState} from 'react';
import {
  Routes,
  Route,
  Link
} from 'react-router-dom';


import { HomePage } from './pages/HomePage';
import { Screener } from './pages/Screener';
import { Help } from './pages/Help';
import { NotFoundPage } from './pages/NotFoundPage';

function App() {
  const BaseStyle ="App"
  const [colorTheme, setColorTheme] = useState('light')
  const ChangeTheme = () => {
    colorTheme == 'light' ? setColorTheme('dark') : setColorTheme('light')
  }
  return (
    <div className={[BaseStyle, colorTheme].join(" ")}>
      <header className="App-header">
        <div className="header-ridht">
          <Link to="/">HOME</Link>
          <Link to="/screener">Screener</Link>
          <Link to="/help">Help</Link>
        </div>
        <div className="headrer-left">
          <h1>
          Settings
          </h1>
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
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
