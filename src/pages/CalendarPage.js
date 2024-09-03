import React from 'react';
import CalendarView from '../components/CalendarView';
import EventForm from '../components/EventForm'; // Ensure EventForm is properly imported

const CalendarPage = () => (
  <div>
    <h1>Calendar Page</h1>
    <CalendarView />
    <EventForm />
  </div>
);

export default CalendarPage;
