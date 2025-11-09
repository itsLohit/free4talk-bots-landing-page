import { motion } from 'framer-motion';
import { Coffee, Sparkles, Download, Zap } from 'lucide-react';
import BotCard from '../components/BotCard';
import { bots } from '../data/bots';

export default function Home() {
  const availableBots = bots.filter(b => b.status === 'Available');
  const comingSoonBots = bots.filter(b => b.status === 'Coming Soon');
  
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="hero-badge">
              <Sparkles size={16} />
              <span>Powered by GetSolace</span>
            </div>
            
            <h1 className="hero-title">
              Supercharge Your
              <br />
              <span className="gradient-text">Free4Talk Experience</span>
            </h1>
            
            <p className="hero-description">
              Collection of AI-powered bots to enhance your Free4Talk rooms. 
              Music control, moderation, games, and more. Built by GetSolace.
            </p>
            
            <div className="hero-buttons">
              <a href="#bots" className="btn btn-primary btn-large">
                <Download size={20} />
                Explore Bots
              </a>
              
              <a 
                href="https://buymeacoffee.com/yourname" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-large"
              >
                <Coffee size={20} />
                Support Development
              </a>
            </div>
            
            <div className="hero-stats">
              <div className="stat">
                <div className="stat-value">{bots.length}</div>
                <div className="stat-label">Available Bots</div>
              </div>
              <div className="stat">
                <div className="stat-value">2,000+</div>
                <div className="stat-label">Active Users</div>
              </div>
              <div className="stat">
                <div className="stat-value">4.9/5</div>
                <div className="stat-label">Average Rating</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Rest of the code remains same... */}
      {/* Available Bots */}
      <section className="bots-section" id="bots">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Available Now</h2>
            <p>Download and start using these bots today</p>
          </motion.div>
          
          <div className="bots-grid">
            {availableBots.map((bot, index) => (
              <BotCard key={bot.id} bot={bot} index={index} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Coming Soon */}
      {comingSoonBots.length > 0 && (
        <section className="bots-section coming-soon-section">
          <div className="container">
            <motion.div
              className="section-header"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2>Coming Soon</h2>
              <p>Exciting new bots in development</p>
            </motion.div>
            
            <div className="bots-grid">
              {comingSoonBots.map((bot, index) => (
                <BotCard key={bot.id} bot={bot} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}
      
      {/* Why Choose Us */}
      <section className="features-section" id="features">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Why Choose GetSolace Bots?</h2>
            <p>Built with care for the Free4Talk community</p>
          </motion.div>
          
          <div className="features-grid-home">
            <motion.div
              className="feature-card-home"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Zap size={32} />
              <h3>Easy to Use</h3>
              <p>Simple installation and natural text commands</p>
            </motion.div>
            
            <motion.div
              className="feature-card-home"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Sparkles size={32} />
              <h3>AI-Powered</h3>
              <p>Advanced AI for smart suggestions and automation</p>
            </motion.div>
            
            <motion.div
              className="feature-card-home"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Coffee size={32} />
              <h3>Community Driven</h3>
              <p>Built by Free4Talk users, for Free4Talk users</p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Support Section */}
      <section className="support-section" id="support">
        <div className="container">
          <motion.div
            className="support-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Coffee size={48} />
            <h2>Love Our Bots?</h2>
            <p>
              Support GetSolace by buying us a coffee! Your support helps us 
              create more amazing bots and keep everything free for the community.
            </p>
            <a 
              href="https://buymeacoffee.com/yourname" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-large"
            >
              <Coffee size={24} />
              Buy Me a Coffee
            </a>
            <p className="support-note">
              ☕ Even a small coffee helps us keep building!
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
