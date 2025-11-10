import { motion } from 'framer-motion';
import { Settings } from 'lucide-react';

const configurations = [
  { 
    setting: 'Bot Username', 
    description: 'Customize your bot\'s display name in the chat' 
  },
  { 
    setting: 'Persona Prompt', 
    description: 'Define bot personality (e.g., "friendly assistant", "witty companion")' 
  },
  { 
    setting: 'Auto React to Messages', 
    description: 'Enable smart emoji reactions based on message sentiment' 
  },
  { 
    setting: 'Reply to Private Messages', 
    description: 'Choose if bot responds to DMs or only group messages' 
  },
  { 
    setting: 'Ignore My Own Messages', 
    description: 'Prevent bot from replying to its own messages' 
  },
  { 
    setting: 'Character Limit', 
    description: 'Set maximum response length to keep replies concise' 
  },
  { 
    setting: 'Friends List (Premium)', 
    description: 'Add users who get playful, personalized responses' 
  },
  { 
    setting: 'Person Facts (Premium)', 
    description: 'Store facts about users for context-aware conversations' 
  },
  { 
    setting: 'Personality Generator (Premium)', 
    description: 'AI-powered tool to generate creative bot personas' 
  }
];

export default function Commands() {
  return (
    <section id="commands" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Settings className="mx-auto text-purple-400 mb-4" size={48} />
          <h2 className="text-4xl font-bold text-white mb-4">Configuration Options</h2>
          <p className="text-xl text-gray-400">Customize every aspect through the extension popup</p>
        </motion.div>

        <div className="space-y-4">
          {configurations.map((config, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-gray-900/30 backdrop-blur-sm p-6 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="bg-purple-500/10 px-3 py-1 rounded-lg">
                  <span className="text-purple-400 font-mono text-sm">{config.setting}</span>
                </div>
                <p className="text-gray-400 flex-1">{config.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
