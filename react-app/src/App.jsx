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
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/">HOME</Link>
        <Link to="/screener">Screener</Link>
        <Link to="/help">Help</Link>
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
