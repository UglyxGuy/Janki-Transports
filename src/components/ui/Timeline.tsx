import { motion } from 'framer-motion';

interface TimelineEvent {
  date: string;
  location: string;
  status: string;
  description: string;
}

interface TimelineProps {
  events: TimelineEvent[];
}

export const Timeline = ({ events }: TimelineProps) => {
  return (
    <div className="space-y-8">
      {events.map((event, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.2 }}
          className="relative pl-8 border-l-2 border-primary"
        >
          <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary" />
          <div className="mb-1 text-sm text-gray-500">{event.date}</div>
          <div className="font-semibold">{event.status}</div>
          <div className="text-gray-600">{event.location}</div>
          <div className="text-sm text-gray-500">{event.description}</div>
        </motion.div>
      ))}
    </div>
  );
}; 