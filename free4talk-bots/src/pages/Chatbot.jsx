import { Link } from 'react-router-dom';
import { ArrowLeft, Download, Star, Users, BookOpen } from 'lucide-react';
import Features from '../components/chatbot/Features';
import Installation from '../components/chatbot/Installations';
import Commands from '../components/chatbot/Commands';
import Pricing from '../components/chatbot/Pricing';
import FAQ from '../components/chatbot/FAQ';

export default function Chatbot() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Home
          </Link>

          <div className="text-center">
            <span className="text-6xl mb-6 block">💬</span>
            <h1 className="text-5xl font-bold text-white mb-6">
              Free4Talk Chatbot
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Universal AI Chat Companion powered by Gemini AI. Natural conversations with personality profiles and smart context-aware responses.
            </p>
            
            <div className="flex gap-4 justify-center mb-8">
              <a 
                href="downloads/chatbot-extension.zip" 
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all flex items-center gap-2"
              >
                <Download size={20} />
                Download Extension
              </a>
            </div>

            <div className="flex gap-8 justify-center text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Star className="text-yellow-400" size={16} />
                <span>5.0 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={16} />
                <span>New Release</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen size={16} />
                <span>Full Documentation</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Sections */}
      <Features />
      <Installation />
      <Commands />
      <Pricing />
      <FAQ />
    </div>
  );
}
