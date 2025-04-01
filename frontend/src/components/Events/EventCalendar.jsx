import { useState } from 'react';
import { Calendar, Views, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Calendar as CalIcon } from 'lucide-react';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const EventCalendar = ({ events, onEventClick }) => {
  const [view, setView] = useState('month');
  const [date, setDate] = useState(new Date());

  const eventStyleGetter = (event) => {
    let backgroundColor = '#7C2D12'; // Default wine color

    switch (event.category?.toLowerCase()) {
      case 'tournament':
        backgroundColor = '#047857'; // Green
        break;
      case 'seminar':
        backgroundColor = '#1D4ED8'; // Blue
        break;
      case 'grading':
        backgroundColor = '#7C2D12'; // Wine
        break;
      case 'training':
        backgroundColor = '#B45309'; // Orange
        break;
      case 'social':
        backgroundColor = '#6D28D9'; // Purple
        break;
    }

    return {
      style: {
        backgroundColor,
        borderRadius: '4px',
        opacity: 0.8,
        color: 'white',
        border: '0',
        display: 'block'
      }
    };
  };

  const CustomToolbar = (toolbar) => {
    const goToBack = () => {
      toolbar.onNavigate('PREV');
    };

    const goToNext = () => {
      toolbar.onNavigate('NEXT');
    };

    const goToCurrent = () => {
      toolbar.onNavigate('TODAY');
    };

    const label = () => {
      const date = moment(toolbar.date);
      return (
        <span className="text-lg font-semibold">
          {date.format('MMMM YYYY')}
        </span>
      );
    };

    return (
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <button
            onClick={goToCurrent}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            Today
          </button>
          <div className="flex items-center space-x-1">
            <button
              onClick={goToBack}
              className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={goToNext}
              className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
          <div className="text-gray-900">{label()}</div>
        </div>

        <div className="flex items-center space-x-2">
          {['month', 'week', 'day', 'agenda'].map((viewName) => (
            <button
              key={viewName}
              onClick={() => toolbar.onView(viewName)}
              className={`
                px-4 py-2 text-sm font-medium rounded-lg
                ${toolbar.view === viewName
                  ? 'bg-wine-600 text-white'
                  : 'text-gray-700 bg-white border border-gray-300 hover:bg-gray-50'
                }
              `}
            >
              {viewName.charAt(0).toUpperCase() + viewName.slice(1)}
            </button>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <Calendar
        localizer={localizer}
        events={events.map(event => ({
          ...event,
          start: new Date(event.startDate + ' ' + event.startTime),
          end: new Date(event.endDate + ' ' + event.endTime)
        }))}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 800 }}
        views={['month', 'week', 'day', 'agenda']}
        step={60}
        showMultiDayTimes
        defaultView={Views.MONTH}
        onSelectEvent={onEventClick}
        eventPropGetter={eventStyleGetter}
        components={{
          toolbar: CustomToolbar
        }}
        popup
        tooltipAccessor={event => event.title}
      />

      {/* Legend */}
      <div className="mt-6 border-t border-gray-200 pt-4">
        <h4 className="text-sm font-medium text-gray-700 mb-3">Event Categories</h4>
        <div className="flex flex-wrap gap-4">
          {[
            { name: 'Tournament', color: '#047857' },
            { name: 'Seminar', color: '#1D4ED8' },
            { name: 'Grading', color: '#7C2D12' },
            { name: 'Training', color: '#B45309' },
            { name: 'Social', color: '#6D28D9' }
          ].map(category => (
            <div key={category.name} className="flex items-center">
              <div
                className="w-4 h-4 rounded-full mr-2"
                style={{ backgroundColor: category.color }}
              />
              <span className="text-sm text-gray-600">{category.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventCalendar;
