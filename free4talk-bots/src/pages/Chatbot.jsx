import { Link } from 'react-router-dom';
import { ArrowLeft, Download, Star, Users, BookOpen } from 'lucide-react';
import Features from '../components/chatbot/Features';
import Installation from '../components/chatbot/Installations';
import Commands from '../components/chatbot/Commands';
import Pricing from '../components/chatbot/Pricing';
import FAQ from '../components/chatbot/FAQ';

export default function Chatbot() {
  return (
    <div className="bot-page">
      {/* Header */}
      <section className="bot-hero">
        <div className="container">
          <Link to="/" className="back-link">
            <ArrowLeft size={20} />
            Back to Home
          </Link>

          <div className="bot-hero-content">
            <div className="bot-hero-icon">💬</div>
            <h1>Free4Talk Chatbot</h1>
            <p className="bot-hero-tagline">Universal AI Chat Companion</p>
            <p className="bot-hero-description">
              Powered by Gemini AI. Natural conversations with personality profiles and smart context-aware responses. Built for the Free4Talk community with privacy in mind.
            </p>

            <div className="bot-hero-actions">
              <a href="../downloads/chatbot-extension.zip" download className="btn btn-primary btn-large">
                <Download size={20} />
                Download Extension
              </a>
              <Link to="/bots/chatbot/install" className="btn btn-secondary btn-large">
                <BookOpen size={20} />
                Installation Guide
              </Link>
            </div>

            <div className="bot-hero-stats">
              <div className="stat">
                <div className="stat-icon"><Star size={28} /></div>
                <div className="stat-label">5.0 Rating</div>
              </div>
              <div className="stat">
                <div className="stat-icon"><Users size={28} /></div>
                <div className="stat-label">New Release</div>
              </div>
              <div className="stat">
                <div className="stat-icon"><BookOpen size={28} /></div>
                <div className="stat-label">Full Docs</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Components */}
      <Features />
      <Installation />
      <Commands />
      <Pricing />
      <FAQ />
    </div>
  );
}
