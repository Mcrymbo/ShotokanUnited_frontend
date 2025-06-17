import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { auth } from '../../hooks';
import { hdki_cover } from '../../assets';
import { ArrowRight, MapPin, Users, Clock, X } from 'lucide-react';
import EventRegistrationForm from '../../components/Events/EventRegistrationForm';

export default function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEvents = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await auth.get('/api/events/');
      setEvents(response.data.results);
    } catch (error) {
      setError('Failed to load events. Please try again later.');
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleEvents();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="card bg-white shadow-lg animate-pulse">
            <div className="h-52 bg-wine-100 rounded-t-xl"></div>
            <div className="p-6 space-y-4">
              <div className="h-4 bg-wine-100 rounded w-3/4"></div>
              <div className="h-4 bg-wine-100 rounded w-1/2"></div>
              <div className="h-4 bg-wine-100 rounded w-full"></div>
              <div className="space-y-2">
                <div className="h-3 bg-wine-100 rounded w-1/3"></div>
                <div className="h-3 bg-wine-100 rounded w-1/2"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <div className="text-wine-700 mb-4">{error}</div>
        <button 
          onClick={handleEvents}
          className="btn btn-primary"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {events.slice(0, 3).map((event, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
        >
          <Link 
            to={`/events/${event.id}`}
            className="group block"
          >
            <div className="card bg-white shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              {/* Image Section */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={event.images[0]?.image_url || hdki_cover}
                  alt={event.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-wine-dark/80 via-wine-dark/40 to-transparent"></div>
                
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <div className="px-3 py-1 bg-gold/90 text-white text-sm font-semibold rounded-full backdrop-blur-sm">
                    Upcoming
                  </div>
                </div>

                {/* Date Badge */}
                <div className="absolute bottom-4 left-4 bg-white/90 rounded-lg p-2 backdrop-blur-sm">
                  <div className="text-wine-700 font-bold text-lg">
                    {new Date(event.date).getDate()}
                  </div>
                  <div className="text-wine-600 text-sm">
                    {new Date(event.date).toLocaleString('default', { month: 'short' })}
                  </div>
                </div>
              </div>
              
              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-jet mb-3 line-clamp-2 group-hover:text-wine-700 transition-colors">
                  {event.title}
                </h3>
                
                <p className="text-jetGray line-clamp-2 mb-4">
                  {event.description}
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-jetLight">
                    <Clock className="w-5 h-5 text-wine-600" />
                    <span className="font-medium">
                      {new Date(event.date).toLocaleTimeString([], { 
                        hour: '2-digit', 
                        minute: '2-digit'
                      })}
                    </span>
                  </div>
                  
                  {event.location && (
                    <div className="flex items-center gap-3 text-jetLight">
                      <MapPin className="w-5 h-5 text-wine-600" />
                      <span className="font-medium">{event.location}</span>
                    </div>
                  )}
                  
                  {event.participants_count && (
                    <div className="flex items-center gap-3 text-jetLight">
                      <Users className="w-5 h-5 text-wine-600" />
                      <span className="font-medium">
                        {event.participants_count} participants
                      </span>
                    </div>
                  )}
                </div>

                {/* Action Button */}
                <div className="mt-6 flex justify-between items-center pt-4 border-t border-wine-100">
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      setSelectedEvent(event);
                      setIsModalOpen(true);
                    }}
                    className="btn btn-primary gap-2 text-white font-semibold"
                  >
                    Register Now
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  
                  <div className="flex items-center gap-2 text-wine-700 font-semibold group-hover:text-wine-800 transition-colors">
                    View Details
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
    {/* Registration Modal */}
    <AnimatePresence>
      {isModalOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-5"
              onClick={() => setIsModalOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-2xl overflow-auto max-h-[90vh] w-full max-w-2xl mx-auto shadow-xl relative"
            >
              <div className="sticky top-0 flex justify-end p-4 bg-white border-b z-10">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>
              <div className="p-6">
                {selectedEvent && (
                  <EventRegistrationForm
                    eventId={selectedEvent.id}
                    eventTitle={selectedEvent.title}
                  />
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
