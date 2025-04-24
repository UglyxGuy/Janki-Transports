import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Home = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <>
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="h-screen relative"
      >
        <video
          autoPlay
          loop
          muted
          className="absolute w-full h-full object-cover"
        >
          <source src="/videos/logistics-bg.mp4" type="video/mp4" />
        </video>
        
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <div className="max-w-7xl mx-auto px-4 h-full flex items-center">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-white"
            >
              <h1 className="text-6xl font-bold mb-6">
                Global Logistics Solutions
              </h1>
              <p className="text-xl mb-8">
                Delivering Excellence Across Continents
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-secondary text-white px-8 py-3 rounded-full text-lg"
              >
                Track Shipment
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            ref={ref}
            initial={{ y: 50, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: "🚛",
                title: "Road Freight",
                description: "Nationwide road transportation services"
              },
              {
                icon: "✈️",
                title: "Air Freight",
                description: "International air cargo solutions"
              },
              {
                icon: "🚢",
                title: "Ocean Freight",
                description: "Global sea freight services"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Live Tracking Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-white/10 p-8 rounded-2xl backdrop-blur-lg"
          >
            <h2 className="text-3xl font-bold mb-6">Track Your Shipment</h2>
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Enter tracking number"
                className="flex-1 px-4 py-2 rounded-lg text-gray-800"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-secondary px-8 py-2 rounded-lg"
              >
                Track
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Statistics Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "15+", label: "Years Experience" },
              { number: "1000+", label: "Happy Clients" },
              { number: "500+", label: "Vehicles" },
              { number: "50+", label: "Cities Covered" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
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
      </motion.section>

      {/* Call to Action */}
      <section className="py-20 bg-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Ship?
            </h2>
            <p className="text-xl mb-8">
              Get a quote for your shipping needs in minutes
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-secondary px-8 py-3 rounded-full text-lg"
            >
              Request Quote
            </motion.button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home; 