// pages/CalendarPage.js

import React, { useState } from 'react';
import CalendarView from '../components/CalendarView';
import EventForm from '../components/EventForm';
import useEvent from '../hooks/useEvent';

const CalendarPage = () => {
  const [isFormVisible, setFormVisible] = useState(false);
  const { addEvent } = useEvent();

  const handleEventSubmit = (event) => {
    const newEvent = { ...event, id: Date.now() };  // Ensure unique ID for the new event
    addEvent(newEvent);
    setFormVisible(false); // Hide the form after submission
  };

  return (
    <div>
      <h1>Calendar Page</h1>
      <CalendarView />
      {isFormVisible && <EventForm onSubmit={handleEventSubmit} />}
      <button onClick={() => setFormVisible(!isFormVisible)}>
        {isFormVisible ? 'Cancel' : 'Add Event'}
      </button>
    </div>
  );
};

export default CalendarPage;
