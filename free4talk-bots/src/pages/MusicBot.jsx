import { Link } from 'react-router-dom';
import { ArrowLeft, Download, Star, Users, BookOpen } from 'lucide-react';
import Features from '../components/music-bot/Features';
import Installation from '../components/music-bot/Installation';
import Commands from '../components/music-bot/Commands';
import Pricing from '../components/music-bot/Pricing';
import FAQ from '../components/music-bot/FAQ';

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
            <a href="/downloads/music-bot-extension.zip" className="btn btn-primary btn-large">
              <Download size={24} />
              Download Extension
            </a>
            <Link to="../pages/MusicBotInstall.jsx" className="btn btn-secondary btn-large">
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

        {/* Features Section */}
        <Features />

        {/* Installation Section */}
        <Installation />

        {/* Commands Section */}
        <Commands />

        {/* Pricing Section */}
        <Pricing />

        {/* FAQ Section */}
        <FAQ />
      </div>
    </div>
  );
}
