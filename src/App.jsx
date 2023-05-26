import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import InfoPage from './pages/InfoPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/infopage" element={<InfoPage />} />
      </Routes>
    </Router>
  );
}
export default App;
