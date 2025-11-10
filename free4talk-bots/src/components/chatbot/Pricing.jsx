import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';

const plans = [
  {
    name: 'Free',
    price: '₹0',
    period: 'forever',
    features: [
      'Natural AI conversations',
      'Basic personality customization',
      'Unlimited messages',
      'Your own Gemini API key',
      'Profile save/load (3 profiles)',
      'Auto reactions',
      'No ads'
    ],
    cta: 'Download Free',
    link: '../downloads/chatbot-extension.zip',
    download: true,
    popular: false
  },
  {
    name: 'Premium',
    price: '$5',
    period: '/month',
    features: [
      'Everything in Free',
      'Person Facts Memory',
      'Friends List with special responses',
      'AI Personality Generator',
      'Unlimited profile saves',
      '2 devices per license',
      'Priority support',
      'Early access to new features'
    ],
    cta: 'Upgrade to Premium',
    link: 'https://buymeacoffee.com/avataraang',
    download: false,
    popular: true
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-400">Start free, upgrade when you need advanced features</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`relative bg-gradient-to-br ${
                plan.popular 
                  ? 'from-purple-900/40 to-blue-900/40 border-purple-500/50' 
                  : 'from-gray-900/40 to-gray-800/40 border-gray-700/50'
              } backdrop-blur-sm p-8 rounded-2xl border-2`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Sparkles size={14} />
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="text-purple-400 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={plan.link}
                download={plan.download}
                target={!plan.download ? '_blank' : undefined}
                rel={!plan.download ? 'noopener noreferrer' : undefined}
                className={`block w-full text-center py-3 rounded-lg font-semibold transition-all ${
                  plan.popular
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-lg hover:shadow-purple-500/50'
                    : 'bg-gray-700 text-white hover:bg-gray-600'
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
