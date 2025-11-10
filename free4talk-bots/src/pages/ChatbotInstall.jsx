import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Download, Key, Chrome, CheckCircle, AlertTriangle, Settings, MessageCircle, Users, Database, Sparkles } from 'lucide-react';

export default function ChatbotInstall() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Header */}
      <div className="relative overflow-hidden border-b border-purple-500/20">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10" />
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link 
            to="/bots/chatbot" 
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Chatbot
          </Link>

          <div className="text-center">
            <span className="text-5xl mb-4 block">💬</span>
            <h1 className="text-4xl font-bold text-white mb-4">
              Free4Talk Chatbot Installation Guide
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Follow these simple steps to install and configure the Chatbot extension. 
              No coding required - just copy, paste, and you're ready to go!
            </p>
          </div>
        </div>
      </div>

      {/* Important Notice */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-6 flex items-start gap-4"
        >
          <AlertTriangle className="text-yellow-400 flex-shrink-0 mt-1" size={24} />
          <div>
            <h3 className="text-yellow-300 font-semibold mb-2">Desktop Only</h3>
            <p className="text-gray-300">
              This extension only works on desktop computers (Windows, macOS, Linux). 
              Mobile devices and tablets cannot install Chrome extensions.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Step 1: Enable Developer Mode */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-purple-500/20 w-12 h-12 rounded-full flex items-center justify-center">
              <span className="text-purple-300 font-bold text-xl">1</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <Chrome className="text-purple-400" size={28} />
                Enable Developer Mode
              </h2>
              <p className="text-gray-400">Developer mode lets you load extensions from a folder</p>
            </div>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-purple-500/20 p-8 space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="text-purple-400 flex-shrink-0 mt-1" size={20} />
              <div>
                <p className="text-gray-300 mb-2">Open Chrome and navigate to</p>
                <code className="bg-gray-800 text-purple-300 px-4 py-2 rounded text-sm">
                  chrome://extensions
                </code>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="text-purple-400 flex-shrink-0 mt-1" size={20} />
              <p className="text-gray-300">
                Turn on <strong className="text-white">Developer mode</strong> in the top-right corner
              </p>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="text-purple-400 flex-shrink-0 mt-1" size={20} />
              <p className="text-gray-300">Confirm the toggle shows as enabled</p>
            </div>

            <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 mt-4">
              <p className="text-blue-300 text-sm">
                💡 Chrome requires developer mode to load unpacked (folder) extensions that are not from the Chrome Web Store.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Step 2: Download & Load Extension */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-purple-500/20 w-12 h-12 rounded-full flex items-center justify-center">
              <span className="text-purple-300 font-bold text-xl">2</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <Download className="text-purple-400" size={28} />
                Download & Load Extension
              </h2>
              <p className="text-gray-400">Download, extract, and load the extension into Chrome</p>
            </div>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-purple-500/20 p-8 space-y-6">
            <div className="flex items-start gap-3">
              <CheckCircle className="text-purple-400 flex-shrink-0 mt-1" size={20} />
              <div className="flex-1">
                <p className="text-gray-300 mb-3">Click the button below to download the ZIP file</p>
                <a
                  href="../downloads/chatbot-extension.zip"
                  download
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all"
                >
                  <Download size={20} />
                  Download Chatbot Extension
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="text-purple-400 flex-shrink-0 mt-1" size={20} />
              <p className="text-gray-300">
                Right-click the ZIP file and choose "Extract" to create a folder. 
                You will load this folder in Chrome.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="text-purple-400 flex-shrink-0 mt-1" size={20} />
              <div>
                <p className="text-gray-300 mb-2">Go back to</p>
                <code className="bg-gray-800 text-purple-300 px-4 py-2 rounded text-sm">
                  chrome://extensions
                </code>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="text-purple-400 flex-shrink-0 mt-1" size={20} />
              <p className="text-gray-300">
                Click <strong className="text-white">"Load unpacked"</strong> and select the extracted folder
              </p>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="text-purple-400 flex-shrink-0 mt-1" size={20} />
              <p className="text-gray-300">
                Pin the extension to your toolbar for quick access by clicking the puzzle icon and pinning it.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Step 3: Get Gemini API Key */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-purple-500/20 w-12 h-12 rounded-full flex items-center justify-center">
              <span className="text-purple-300 font-bold text-xl">3</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <Key className="text-purple-400" size={28} />
                Get Your Gemini API Key
              </h2>
              <p className="text-gray-400">We recommend using Google Gemini as a free option</p>
            </div>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-purple-500/20 p-8 space-y-6">
            <div className="flex items-start gap-3">
              <CheckCircle className="text-purple-400 flex-shrink-0 mt-1" size={20} />
              <div className="flex-1">
                <p className="text-gray-300 mb-3">Visit Google AI Studio to get your free API key</p>
                <a
                  href="https://aistudio.google.com/app/apikey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-600 transition-all"
                >
                  <Key size={20} />
                  Get Free Gemini API Key
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="text-purple-400 flex-shrink-0 mt-1" size={20} />
              <p className="text-gray-300">Sign in with your Google account</p>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="text-purple-400 flex-shrink-0 mt-1" size={20} />
              <p className="text-gray-300">Click "Create API Key" and copy it</p>
            </div>

            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 mt-4">
              <p className="text-red-300 text-sm">
                🔒 <strong>Keep your key safe:</strong> Never share your API key publicly. Treat it like a password.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Step 4: Configure Bot Settings */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-purple-500/20 w-12 h-12 rounded-full flex items-center justify-center">
              <span className="text-purple-300 font-bold text-xl">4</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <Settings className="text-purple-400" size={28} />
                Configure Bot Settings
              </h2>
              <p className="text-gray-400">Open the extension popup and complete these fields</p>
            </div>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-purple-500/20 p-8 space-y-6">
            <div className="space-y-4">
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Key className="text-purple-400" size={18} />
                  <h4 className="text-white font-semibold">Gemini API Key</h4>
                </div>
                <p className="text-gray-400 text-sm">Paste your API key from Google AI Studio</p>
              </div>

              <div className="bg-gray-800/50 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <MessageCircle className="text-purple-400" size={18} />
                  <h4 className="text-white font-semibold">Bot Username</h4>
                </div>
                <p className="text-gray-400 text-sm">Choose a display name for your bot (e.g., "ChatBot", "Assistant")</p>
              </div>

              <div className="bg-gray-800/50 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="text-purple-400" size={18} />
                  <h4 className="text-white font-semibold">Bot Persona Prompt</h4>
                </div>
                <p className="text-gray-400 text-sm">
                  Define your bot's personality (e.g., "You are a friendly, helpful assistant" or "You are a witty companion")
                </p>
              </div>

              <div className="bg-gray-800/50 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="text-purple-400" size={18} />
                  <h4 className="text-white font-semibold">Behavior Settings</h4>
                </div>
                <ul className="text-gray-400 text-sm space-y-1 ml-4">
                  <li>• Toggle "Reply to Private Messages" if you want DM responses</li>
                  <li>• Enable "Auto React to Messages" for emoji reactions</li>
                  <li>• Set character limit to control response length</li>
                  <li>• Check "Ignore My Own Messages" to prevent self-replies</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 mt-6">
              <h4 className="text-blue-300 font-semibold mb-2 flex items-center gap-2">
                <Sparkles size={18} />
                Premium Features (Optional)
              </h4>
              <div className="space-y-2 text-blue-200 text-sm ml-4">
                <div className="flex items-start gap-2">
                  <Users className="flex-shrink-0 mt-0.5" size={16} />
                  <span><strong>Friends List:</strong> Add usernames who get special playful responses</span>
                </div>
                <div className="flex items-start gap-2">
                  <Database className="flex-shrink-0 mt-0.5" size={16} />
                  <span><strong>Person Facts:</strong> Store facts about users (e.g., "John loves pizza")</span>
                </div>
                <div className="flex items-start gap-2">
                  <Sparkles className="flex-shrink-0 mt-0.5" size={16} />
                  <span><strong>AI Personality Generator:</strong> Let AI create creative persona prompts</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Step 5: Start Using */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-purple-500/20 w-12 h-12 rounded-full flex items-center justify-center">
              <span className="text-purple-300 font-bold text-xl">5</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <MessageCircle className="text-purple-400" size={28} />
                Start Chatting!
              </h2>
              <p className="text-gray-400">Head to Free4Talk and test your bot</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur-sm rounded-xl border border-purple-500/30 p-8">
            <div className="space-y-4 text-gray-300">
              <p className="flex items-start gap-3">
                <CheckCircle className="text-purple-400 flex-shrink-0 mt-1" size={20} />
                Open Free4Talk in a new tab
              </p>
              <p className="flex items-start gap-3">
                <CheckCircle className="text-purple-400 flex-shrink-0 mt-1" size={20} />
                Join a room or start chatting
              </p>
              <p className="flex items-start gap-3">
                <CheckCircle className="text-purple-400 flex-shrink-0 mt-1" size={20} />
                Your bot will automatically analyze messages and respond when appropriate
              </p>
              <p className="flex items-start gap-3">
                <CheckCircle className="text-purple-400 flex-shrink-0 mt-1" size={20} />
                Watch it naturally participate in conversations!
              </p>
            </div>

            <div className="mt-6 bg-green-500/10 border border-green-500/30 rounded-lg p-4">
              <p className="text-green-300 text-sm">
                ✨ <strong>Pro Tip:</strong> The bot uses AI to decide when to respond. It won't reply to every message - 
                only when it has something relevant to add, just like a real person!
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Troubleshooting */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <AlertTriangle className="mx-auto text-yellow-400 mb-4" size={40} />
            <h2 className="text-3xl font-bold text-white mb-2">Troubleshooting</h2>
            <p className="text-gray-400">Common problems and how to fix them</p>
          </div>

          <div className="space-y-4">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg border border-purple-500/20 p-6">
              <h3 className="text-white font-semibold mb-2">❌ Bot not responding</h3>
              <ul className="text-gray-400 space-y-2 text-sm ml-4">
                <li>• Check that your Gemini API key is correct and active</li>
                <li>• Verify the bot username matches what you configured</li>
                <li>• Make sure "Ignore My Own Messages" is enabled</li>
                <li>• Check browser console (F12) for error messages</li>
                <li>• Refresh the Free4Talk page after changing settings</li>
              </ul>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg border border-purple-500/20 p-6">
              <h3 className="text-white font-semibold mb-2">❌ Extension won't load</h3>
              <ul className="text-gray-400 space-y-2 text-sm ml-4">
                <li>• Ensure Developer Mode is enabled in chrome://extensions</li>
                <li>• Make sure you extracted the ZIP file completely</li>
                <li>• Select the correct folder (should contain manifest.json)</li>
                <li>• Try removing and re-adding the extension</li>
              </ul>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg border border-purple-500/20 p-6">
              <h3 className="text-white font-semibold mb-2">❌ Premium features not working</h3>
              <ul className="text-gray-400 space-y-2 text-sm ml-4">
                <li>• Verify you've activated your license key in the popup</li>
                <li>• Check that the license is valid and not expired</li>
                <li>• Ensure you haven't exceeded the 2-device limit</li>
                <li>• Try deactivating and reactivating the license</li>
              </ul>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg border border-purple-500/20 p-6">
              <h3 className="text-white font-semibold mb-2">❌ API quota exceeded</h3>
              <ul className="text-gray-400 space-y-2 text-sm ml-4">
                <li>• Gemini free tier has usage limits - wait a few minutes</li>
                <li>• Consider upgrading to Gemini paid tier for higher limits</li>
                <li>• Reduce character limit to minimize API usage</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-blue-500/10 border border-blue-500/30 rounded-lg p-6 text-center">
            <p className="text-blue-200 mb-4">
              If you're still having issues, reach out to us!
            </p>
            <a
              href="https://buymeacoffee.com/avataraang"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all"
            >
              Get Support
            </a>
          </div>
        </motion.div>
      </section>

      {/* Back to Bot Page */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <Link
          to="/bots/chatbot"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Chatbot Page
        </Link>
      </div>
    </div>
  );
}
