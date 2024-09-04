// pages/EventDetailsPage.js

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import EventForm from '../components/EventForm';
import useEvent from '../hooks/useEvent';  // Correct import

const EventDetailsPage = () => {
  const { id } = useParams();
  const { events, editEvent } = useEvent();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const foundEvent = events.find(e => e.id === parseInt(id));
    setEvent(foundEvent);
  }, [id, events]);

  const handleEventSubmit = (updatedEvent) => {
    editEvent({ ...updatedEvent, id: event.id });
    // Optionally redirect or provide feedback after editing
  };

  return (
    <div>
      <h1>Event Details Page</h1>
      {event && <EventForm event={event} onSubmit={handleEventSubmit} />}
    </div>
  );
};

export default EventDetailsPage;
