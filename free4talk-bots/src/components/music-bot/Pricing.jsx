import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';

const plans = [
  {
    name: 'Free',
    price: '₹0',
    period: 'forever',
    features: [
      'Manual queue management',
      'Unlimited songs',
      'Your own API key',
      'Multi-user support',
      'No ads'
    ],
    cta: 'Download Free',
    link: '/downloads/music-bot-extension.zip',  // ✅ Just the path as a string
    download: true,  // ✅ Add a flag to indicate it's a download
    popular: false
  },
  {
    name: 'Premium',
    price: '$3',
    period: '/month',
    features: [
      'Everything in Free',
      'AI-powered autoplay',
      'Smart song suggestions',
      'Unlimited AI suggestions',
      '2 devices per license',
      'Priority support'
    ],
    cta: 'Upgrade to Premium',
    link: 'https://buymeacoffee.com/yourname',
    popular: true
  }
];

export default function Pricing() {
  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>Simple, Transparent Pricing</h2>
          <p>Start free, upgrade when you need AI-powered features</p>
        </motion.div>
        
        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`pricing-card ${plan.popular ? 'popular' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              {plan.popular && (
                <div className="popular-badge">
                  <Sparkles size={14} />
                  Most Popular
                </div>
              )}
              
              <h3>{plan.name}</h3>
              <div className="price">
                <span className="amount">{plan.price}</span>
                <span className="period">{plan.period}</span>
              </div>
              
              <ul className="features-list">
                {plan.features.map((feature, i) => (
                  <li key={i}>
                    <Check size={18} />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <a 
                href={plan.link} 
                className={`btn ${plan.popular ? 'btn-primary' : 'btn-secondary'} btn-block`}
                target={plan.popular ? '_blank' : '_self'}
                rel={plan.popular ? 'noopener noreferrer' : ''}
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
