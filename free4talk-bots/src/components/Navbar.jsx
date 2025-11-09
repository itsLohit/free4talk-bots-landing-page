import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Coffee, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  const scrollToSection = (sectionId) => {
    setIsOpen(false);
    
    // If not on home page, navigate to home first, then scroll
    if (!isHome) {
      navigate('/');
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return;
    }
    
    // If on home page, smooth scroll immediately
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold gradient-text">
            GetSolace Bots
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-white"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <div className={`${isOpen ? 'block' : 'hidden'} md:flex items-center gap-6`}>
            <button
              onClick={() => scrollToSection('bots')}
              className="nav-link-button"
            >
              Bots
            </button>
            
            <button
              onClick={() => scrollToSection('features')}
              className="nav-link-button"
            >
              Features
            </button>
            
            <button
              onClick={() => scrollToSection('support')}
              className="nav-link-button"
            >
              Support
            </button>

            <a
              href="https://buymeacoffee.com/yourname"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors"
            >
              <Coffee className="w-4 h-4" />
              Support Us
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
