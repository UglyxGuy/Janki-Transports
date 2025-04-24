import { motion } from 'framer-motion';
import { Button } from '../ui/Button';

export const Hero = () => {
  return (
    <section className="h-screen relative overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
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
            className="text-white max-w-2xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Global Logistics Solutions
            </h1>
            <p className="text-xl mb-8">
              Delivering Excellence Across Continents
            </p>
            <div className="flex gap-4">
              <Button variant="primary">Track Shipment</Button>
              <Button variant="outline">Learn More</Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}; 