import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import MusicBot from './pages/MusicBot';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';  // ← Import this

function App() {
  return (
    <Router>
      <ScrollToTop />  {/* ← Add this INSIDE Router, BEFORE everything else */}
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bots/music-bot" element={<MusicBot />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
