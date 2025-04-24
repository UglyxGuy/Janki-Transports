import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/utils/animations';

const stats = [
  { number: '15+', label: 'Years Experience' },
  { number: '1000+', label: 'Happy Clients' },
  { number: '500+', label: 'Vehicles' },
  { number: '50+', label: 'Cities Covered' }
];

const values = [
  {
    title: 'Reliability',
    description: 'We deliver on our promises with consistent, dependable service.'
  },
  {
    title: 'Innovation',
    description: 'Embracing technology to improve logistics efficiency.'
  },
  {
    title: 'Sustainability',
    description: 'Committed to environmentally responsible operations.'
  }
];

export const About = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="bg-primary text-white py-20"
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.h1 
            variants={fadeIn('up')}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            About Janki Transports
          </motion.h1>
          <motion.p 
            variants={fadeIn('up')}
            className="text-xl max-w-2xl"
          >
            Leading the way in innovative logistics solutions since 2008
          </motion.p>
        </div>
      </motion.section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-lg p-6"
              >
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}; 