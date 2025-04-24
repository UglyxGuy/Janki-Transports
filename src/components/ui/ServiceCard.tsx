import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/animations';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  features: string[];
  index: number;
}

export const ServiceCard = ({ 
  icon, 
  title, 
  description, 
  features, 
  index 
}: ServiceCardProps) => {
  return (
    <motion.div
      variants={fadeIn('up')}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      custom={index}
      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 
                 sm:p-8 flex flex-col h-full"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      
      <ul className="mt-auto space-y-2">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-center text-sm text-gray-600">
            <svg
              className="w-4 h-4 mr-2 text-secondary"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}; 