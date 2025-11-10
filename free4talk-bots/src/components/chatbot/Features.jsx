import { motion } from 'framer-motion';
import { Brain, Users, Database, Smile, Lock, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Natural AI Conversations',
    description: 'Powered by Google Gemini AI. Understands context and responds naturally like a real person.'
  },
  {
    icon: Database,
    title: 'Person Facts Memory',
    description: 'Premium feature: Bot remembers facts about users and recalls them in conversations for personalized responses.'
  },
  {
    icon: Users,
    title: 'Friends List',
    description: 'Premium feature: Add friends who get special playful responses. Perfect for close community members.'
  },
  {
    icon: Sparkles,
    title: 'Personality Profiles',
    description: 'Save and load multiple bot personalities. Switch between fun, professional, or custom personas instantly.'
  },
  {
    icon: Smile,
    title: 'Smart Auto-Reactions',
    description: 'Bot automatically reacts to messages with appropriate emojis based on message sentiment and context.'
  },
  {
    icon: Lock,
    title: 'Secure Licensing',
    description: 'Premium features protected by RSA encryption. License keys are device-bound for security.'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Powerful Features</h2>
          <p className="text-xl text-gray-400">Everything you need for an intelligent chat companion</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-colors"
            >
              <feature.icon className="text-purple-400 mb-4" size={32} />
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
