import { Github, Twitter, Mail, Heart, Coffee } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="footer-logo-icon">🌟</span>
              <span className="footer-logo-text">GetSolace Bots</span>
            </div>
            <p className="footer-description">
              AI-powered extensions for the Free4Talk community
            </p>
            <p className="footer-domain">free4talk.getsolace.in</p>
          </div>
          
          {/* Links Sections */}
          <div className="footer-links">
            <div className="footer-section">
              <h4>Bots</h4>
              <ul>
                <li><a href="/bots/music-bot">Music Bot</a></li>
                <li><a href="/">All Bots</a></li>
                <li><a href="/#features">Features</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Resources</h4>
              <ul>
                <li><a href="/#support">Support</a></li>
                <li><a href="/docs">Documentation</a></li>
                <li><a href="/changelog">Changelog</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Connect</h4>
              <div className="social-links">
                <a 
                  href="https://github.com/yourusername" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://twitter.com/yourusername" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <Twitter size={20} />
                </a>
                <a 
                  href="mailto:contact@getsolace.in"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              </div>
              <a 
                href="https://buymeacoffee.com/yourname" 
                target="_blank"
                rel="noopener noreferrer"
                className="footer-coffee-btn"
              >
                <Coffee size={18} />
                Buy Me a Coffee
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2025 GetSolace Bots. All rights reserved.
          </p>
          <p className="footer-made-with">
            Made with <Heart size={14} fill="currentColor" /> by GetSolace for the Free4Talk community
          </p>
        </div>
      </div>
    </footer>
  );
}
