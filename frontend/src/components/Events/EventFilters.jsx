import { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, Calendar, Search, X } from 'lucide-react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const EventFilters = ({ onFilter }) => {
  const [filters, setFilters] = useState({
    search: '',
    category: 'all',
    status: 'all',
    startDate: null,
    endDate: null
  });

  const categories = [
    'all',
    'tournament',
    'seminar',
    'grading',
    'training',
    'social'
  ];

  const statuses = [
    'all',
    'upcoming',
    'ongoing',
    'past'
  ];

  const handleFilterChange = (key, value) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilter(newFilters);
  };

  const clearFilters = () => {
    const defaultFilters = {
      search: '',
      category: 'all',
      status: 'all',
      startDate: null,
      endDate: null
    };
    setFilters(defaultFilters);
    onFilter(defaultFilters);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900 flex items-center">
          <Filter className="h-5 w-5 mr-2" />
          Filter Events
        </h2>
        {Object.values(filters).some(value => value && value !== 'all') && (
          <button
            onClick={clearFilters}
            className="text-sm text-gray-500 hover:text-gray-700 flex items-center"
          >
            <X className="h-4 w-4 mr-1" />
            Clear Filters
          </button>
        )}
      </div>

      <div className="space-y-6">
        {/* Search */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Search Events
          </label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              value={filters.search}
              onChange={(e) => handleFilterChange('search', e.target.value)}
              placeholder="Search by title or description"
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-wine-500 focus:border-wine-500"
            />
          </div>
        </div>

        {/* Categories */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Event Category
          </label>
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <motion.button
                key={category}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleFilterChange('category', category)}
                className={`
                  px-4 py-2 rounded-full text-sm font-medium
                  ${filters.category === category
                    ? 'bg-wine-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }
                `}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Status */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Event Status
          </label>
          <div className="flex flex-wrap gap-2">
            {statuses.map(status => (
              <motion.button
                key={status}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleFilterChange('status', status)}
                className={`
                  px-4 py-2 rounded-full text-sm font-medium
                  ${filters.status === status
                    ? 'bg-wine-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }
                `}
              >
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Date Range */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Date Range
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <DatePicker
                selected={filters.startDate}
                onChange={(date) => handleFilterChange('startDate', date)}
                selectsStart
                startDate={filters.startDate}
                endDate={filters.endDate}
                placeholderText="Start Date"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-wine-500 focus:border-wine-500"
              />
            </div>
            <div>
              <DatePicker
                selected={filters.endDate}
                onChange={(date) => handleFilterChange('endDate', date)}
                selectsEnd
                startDate={filters.startDate}
                endDate={filters.endDate}
                minDate={filters.startDate}
                placeholderText="End Date"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-wine-500 focus:border-wine-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventFilters;
