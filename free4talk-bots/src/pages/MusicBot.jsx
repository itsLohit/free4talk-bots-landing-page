import { Link } from 'react-router-dom';
import { ArrowLeft, Download, BookOpen } from 'lucide-react';

export default function MusicBot() {
  return (
    <div className="bot-page">
      <div className="container">
        <Link to="/" className="back-link">
          <ArrowLeft size={18} />
          Back to All Bots
        </Link>

        {/* Hero Section */}
        <section className="bot-hero">
          <div className="bot-hero-icon">🎵</div>
          <h1>Music Bot</h1>
          <p className="bot-hero-tagline">AI-Powered Music Control for Free4Talk</p>
          <p className="bot-hero-description">
            Control YouTube Music with text commands. AI-powered autoplay and smart suggestions. 
            Built for the Free4Talk community with privacy in mind.
          </p>

          <div className="bot-hero-actions">
            <a 
              href="./downloads/music-bot-extension.zip"
              download="music-bot-extension.zip"
              className="btn btn-primary btn-large"
            >
              <Download size={24} />
              Download Extension
            </a>
            
            <Link to="/bots/music-bot/install" className="btn btn-secondary btn-large">
              <BookOpen size={24} />
              Installation Guide
            </Link>
          </div>

          <div className="bot-hero-stats">
            <div className="stat">
              <div className="stat-value">2,000+</div>
              <div className="stat-label">Downloads</div>
            </div>
            <div className="stat">
              <div className="stat-value">4.9</div>
              <div className="stat-label">Rating</div>
            </div>
            <div className="stat">
              <div className="stat-value">Free</div>
              <div className="stat-label">Forever</div>
            </div>
          </div>
        </section>

        {/* Test content to verify rendering */}
        <section className="features" id="features">
          <div className="section-header">
            <h2>Key Features</h2>
            <p>Everything you need to control YouTube Music in Free4Talk</p>
          </div>
          
          <div className="features-grid">
            <div className="feature-card">
              <h3>🎵 Music Control</h3>
              <p>Play, pause, skip, and control volume with simple text commands</p>
            </div>
            
            <div className="feature-card">
              <h3>🤖 AI Autoplay</h3>
              <p>Smart suggestions based on your listening history</p>
            </div>
            
            <div className="feature-card">
              <h3>📋 Queue Management</h3>
              <p>Add songs, view queue, and manage your playlist</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
