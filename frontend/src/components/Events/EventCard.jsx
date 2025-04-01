import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Users, Tag } from 'lucide-react';
import { formatDate, formatTime } from '../../utils/dateUtils';

const EventCard = ({ event, onClick }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer"
    >
      {/* Event Image */}
      <div className="relative h-48">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4">
          <span className={`
            px-3 py-1 rounded-full text-sm font-medium
            ${event.status === 'upcoming' ? 'bg-green-100 text-green-800' :
              event.status === 'ongoing' ? 'bg-blue-100 text-blue-800' :
              'bg-gray-100 text-gray-800'}
          `}>
            {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
          </span>
        </div>
      </div>

      {/* Event Details */}
      <div className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {event.title}
            </h3>
            <p className="text-gray-600 line-clamp-2 mb-4">
              {event.description}
            </p>
          </div>
          {event.isFeatured && (
            <span className="bg-wine-100 text-wine-800 text-xs font-medium px-2.5 py-0.5 rounded">
              Featured
            </span>
          )}
        </div>

        <div className="space-y-2">
          <div className="flex items-center text-gray-600">
            <Calendar className="h-4 w-4 mr-2" />
            <span>{formatDate(event.startDate)}</span>
            {event.endDate && (
              <>
                <span className="mx-2">-</span>
                <span>{formatDate(event.endDate)}</span>
              </>
            )}
          </div>

          <div className="flex items-center text-gray-600">
            <Clock className="h-4 w-4 mr-2" />
            <span>{formatTime(event.startTime)}</span>
            {event.endTime && (
              <>
                <span className="mx-2">-</span>
                <span>{formatTime(event.endTime)}</span>
              </>
            )}
          </div>

          <div className="flex items-center text-gray-600">
            <MapPin className="h-4 w-4 mr-2" />
            <span>{event.location}</span>
          </div>

          {event.maxParticipants && (
            <div className="flex items-center text-gray-600">
              <Users className="h-4 w-4 mr-2" />
              <span>{event.participants?.length || 0} / {event.maxParticipants} participants</span>
            </div>
          )}
        </div>

        {/* Event Categories/Tags */}
        {event.categories && (
          <div className="mt-4 flex flex-wrap gap-2">
            {event.categories.map(category => (
              <span
                key={category}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
              >
                <Tag className="h-3 w-3 mr-1" />
                {category}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default EventCard;
