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
    
    if (!isHome) {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold gradient-text hover:opacity-80 transition-opacity">
            GetSolace Bots
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection('bots')}
              className="text-gray-300 hover:text-white font-medium text-[15px] transition-colors relative group"
            >
              Bots
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-violet-600 group-hover:w-full transition-all duration-300"></span>
            </button>
            
            <button
              onClick={() => scrollToSection('features')}
              className="text-gray-300 hover:text-white font-medium text-[15px] transition-colors relative group"
            >
              Features
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-violet-600 group-hover:w-full transition-all duration-300"></span>
            </button>
            
            <button
              onClick={() => scrollToSection('support')}
              className="text-gray-300 hover:text-white font-medium text-[15px] transition-colors relative group"
            >
              Support
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-violet-600 group-hover:w-full transition-all duration-300"></span>
            </button>

            <a
              href="https://buymeacoffee.com/yourname"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-all hover:shadow-lg hover:shadow-purple-600/50"
            >
              <Coffee className="w-4 h-4" />
              <span className="font-semibold text-sm">Support Us</span>
            </a>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-3 border-t border-gray-800 pt-4">
            <button
              onClick={() => scrollToSection('bots')}
              className="text-gray-300 hover:text-white hover:bg-gray-800/50 font-medium text-left px-4 py-2 rounded-lg transition-colors"
            >
              Bots
            </button>
            
            <button
              onClick={() => scrollToSection('features')}
              className="text-gray-300 hover:text-white hover:bg-gray-800/50 font-medium text-left px-4 py-2 rounded-lg transition-colors"
            >
              Features
            </button>
            
            <button
              onClick={() => scrollToSection('support')}
              className="text-gray-300 hover:text-white hover:bg-gray-800/50 font-medium text-left px-4 py-2 rounded-lg transition-colors"
            >
              Support
            </button>

            <a
              href="https://buymeacoffee.com/yourname"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors mt-2"
            >
              <Coffee className="w-4 h-4" />
              <span className="font-semibold text-sm">Support Us</span>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
