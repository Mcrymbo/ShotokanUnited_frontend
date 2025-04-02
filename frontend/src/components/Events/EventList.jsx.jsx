import { motion } from 'framer-motion';
import EventCard from './EventCard';
import DefaultLayout from '@/layout/DefaultLayout';

const EventList = ({ events, isLoading }) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm p-4 animate-pulse"
          >
            <div className="h-48 bg-gray-200 rounded-lg mb-4" />
            <div className="h-6 bg-gray-200 rounded w-3/4 mb-2" />
            <div className="h-4 bg-gray-200 rounded w-1/2" />
          </div>
        ))}
      </div>
    );
  }

  if (!events?.length) {
    return (
      <DefaultLayout>
        <div className="flex justify-center items-center py-12 min-h-[70vh]">
        <p className="text-gray-600">No events found.</p>
      </div>
      </DefaultLayout>      
    );
  }

  return (
    <DefaultLayout>
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1
          }
        }
      }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </motion.div>
    </DefaultLayout>
  );
};

export default EventList;
