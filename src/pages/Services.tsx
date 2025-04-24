import { motion } from 'framer-motion';
import { ServiceCard } from '../components/ui/ServiceCard';
import { fadeIn, staggerContainer } from '../utils/animations';

const services = [
  {
    icon: "🚛",
    title: "Road Freight",
    description: "Nationwide road transportation with real-time tracking and temperature-controlled options.",
    features: ["Door-to-door delivery", "Express shipping", "Temperature monitoring"]
  },
  {
    icon: "✈️",
    title: "Air Freight",
    description: "International air cargo solutions with priority and economy options.",
    features: ["Next-day delivery", "Customs clearance", "Cargo insurance"]
  },
  {
    icon: "🚢",
    title: "Ocean Freight",
    description: "Global sea freight services for all cargo types.",
    features: ["FCL & LCL shipping", "Port-to-port", "Cargo tracking"]
  },
  {
    icon: "🏭",
    title: "Warehousing",
    description: "State-of-the-art warehousing and distribution centers.",
    features: ["Inventory management", "Pick & pack", "Cross-docking"]
  }
];

export const Services = () => {
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
            Our Services
          </motion.h1>
          <motion.p 
            variants={fadeIn('up')}
            className="text-xl max-w-2xl"
          >
            Comprehensive logistics solutions tailored to your business needs
          </motion.p>
        </div>
      </motion.section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Request Quote Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <QuoteForm />
        </div>
      </section>
    </div>
  );
}; 