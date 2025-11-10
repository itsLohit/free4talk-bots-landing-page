import { motion } from 'framer-motion';
import { Download, Key, Settings, MessageCircle } from 'lucide-react';

const steps = [
  {
    icon: Download,
    title: 'Download Extension',
    description: 'Download the Chrome extension ZIP file and extract it to your computer.'
  },
  {
    icon: Key,
    title: 'Get Gemini API Key',
    description: 'Get a free Gemini API key from Google AI Studio. Takes 2 minutes.'
  },
  {
    icon: Settings,
    title: 'Configure Bot',
    description: 'Set bot username, persona prompt, and behavior settings in the extension popup.'
  },
  {
    icon: MessageCircle,
    title: 'Start Chatting',
    description: 'Head to Free4Talk and watch your bot respond naturally to conversations!'
  }
];

export default function Installation() {
  return (
    <section id="installation" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Get Started in Minutes</h2>
          <p className="text-xl text-gray-400">Follow these simple steps to install and configure the bot</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 p-6 rounded-xl border border-purple-500/30 hover:border-purple-500/50 transition-all h-full">
                <div className="bg-purple-500/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <span className="text-purple-300 font-bold text-xl">{index + 1}</span>
                </div>
                <step.icon className="text-purple-400 mb-3" size={28} />
                <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-purple-500 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>

        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="../downloads/chatbot-extension.zip"
            download
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all inline-flex items-center gap-2"
          >
            <Download size={20} />
            Download Extension
          </a>
          <a
            href="https://aistudio.google.com/app/apikey"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-600 transition-all inline-flex items-center gap-2"
          >
            <Key size={20} />
            Get Free API Key
          </a>
        </div>
      </div>
    </section>
  );
}
