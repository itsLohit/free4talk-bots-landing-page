import { HashRouter as Router, Routes, Route } from 'react-router-dom'; // ✅ Change to HashRouter
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import MusicBot from './pages/MusicBot';
import MusicBotInstall from './pages/MusicBotInstall';
import Footer from './components/Footer';

function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

function App() {
  return (
    <Router> {/* ✅ No basename needed with HashRouter */}
      <ScrollToTop />
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bots/music-bot" element={<MusicBot />} />
          <Route path="/bots/music-bot/install" element={<MusicBotInstall />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
