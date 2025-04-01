import { motion } from 'framer-motion';
import EventCard from './EventCard';

const EventList = ({ events, onEventClick }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  if (!events.length) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">No events found matching your criteria.</p>
      </div>
    );
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {events.map(event => (
        <motion.div
          key={event.id}
          variants={itemVariants}
        >
          <EventCard
            event={event}
            onClick={() => onEventClick(event)}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default EventList;
