import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import MusicBot from './pages/MusicBot';
import InstallationPage from './pages/MusicBotInstall'; // ✅ Add this import
import Footer from './components/Footer';

// ScrollToTop Component
function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

function App() {
  return (
    <Router basename="/free4talk-bots-landing-page">
      <ScrollToTop />
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bots/music-bot" element={<MusicBot />} />
          <Route path="/bots/music-bot/install" element={<InstallationPage />} /> {/* ✅ Add this route */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
