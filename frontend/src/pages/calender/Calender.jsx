import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import googleCalendarPlugin from '@fullcalendar/google-calendar';

import { Breadcrumb } from '../../components/Breadcrumbs';
import { DashboardLayout } from '../../layout';

const Calendar = () => {

    const GOOGLE_CALENDAR_API_KEY = import.meta.env.VITE_GOOGLE_CALENDAR_API_KEY;
    const GOOGLE_CALENDAR_ID = import.meta.env.VITE_GOOGLE_CALENDAR_ID;

  return (
    <DashboardLayout>
      <Breadcrumb pageName="Calendar" />

        <div className="p-8 overflow-hidden rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <FullCalendar
                plugins={[dayGridPlugin, googleCalendarPlugin]}
                initialView="dayGridMonth"
                googleCalendarApiKey= {GOOGLE_CALENDAR_API_KEY}
                events={{
                googleCalendarId: { GOOGLE_CALENDAR_ID },
                }}
                headerToolbar={{
                center: 'dayGridMonth,dayGridWeek,dayGridDay',
                left: 'title',
                right: 'prev,next today',
                }}
                eventClick={(info) => {
                alert(`Event: ${info.event.title}`);
                info.jsEvent.preventDefault(); // prevent browser from navigating to event URL
                }}
            />
        </div>
    </DashboardLayout>
  );
};

export default Calendar;
