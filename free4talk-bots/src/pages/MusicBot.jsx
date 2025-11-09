import { Link } from 'react-router-dom';
import { ArrowLeft, Download, Star, Users, BookOpen } from 'lucide-react';
import Features from '../components/music-bot/Features';
import Installation from '../components/music-bot/Installation';
import Commands from '../components/music-bot/Commands';
import Pricing from '../components/music-bot/Pricing';
import FAQ from '../components/music-bot/FAQ';

export default function MusicBot() {
  return (
    <div className="music-bot-page">
      {/* Back Button */}
      <Link to="/" className="back-link">
        <ArrowLeft size={20} />
        Back to All Bots
      </Link>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="bot-icon">🎵</div>
          <h1>Music Bot</h1>
          <p className="subtitle">AI-Powered Music Control for Free4Talk</p>
          <p className="description">
            Control YouTube Music with text commands. AI-powered autoplay and smart
            suggestions. Built for the Free4Talk community with privacy in mind.
          </p>

          {/* Download Buttons */}
          <div className="hero-actions">
            {/* ✅ CORRECT - Download link as <a> tag */}
            <a 
              href="downloads/music-bot-extension.zip"
              download="music-bot-extension.zip"
              className="btn btn-primary btn-lg"
            >
              <Download size={20} />
              Download Extension
            </a>
            
            {/* ✅ CORRECT - Internal navigation as <Link> */}
            <a href="#installation" className="btn btn-secondary btn-lg">
              <BookOpen size={20} />
              Installation Guide
            </a>
          </div>

          {/* Stats */}
          <div className="hero-stats">
            <div className="stat">
              <Users size={24} />
              <div>
                <div className="stat-number">2,000+</div>
                <div className="stat-label">Active Users</div>
              </div>
            </div>
            <div className="stat">
              <Star size={24} />
              <div>
                <div className="stat-number">4.8</div>
                <div className="stat-label">Rating</div>
              </div>
            </div>
            <div className="stat">
              <Download size={24} />
              <div>
                <div className="stat-number">Free</div>
                <div className="stat-label">Always</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Components */}
      <Features />
      <Commands />
      <Installation />
      <Pricing />
      <FAQ />
    </div>
  );
}
