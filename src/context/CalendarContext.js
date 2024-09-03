import React, { createContext, useState } from 'react';

export const CalendarContext = createContext();

export const CalendarProvider = ({ children }) => {
  const [events, setEvents] = useState([]);

  const addEvent = (event) => setEvents([...events, event]);
  const editEvent = (updatedEvent) => {
    setEvents(events.map(e => e.id === updatedEvent.id ? updatedEvent : e));
  };
  const deleteEvent = (id) => setEvents(events.filter(e => e.id !== id));

  return (
    <CalendarContext.Provider value={{ events, addEvent, editEvent, deleteEvent }}>
      {children}
    </CalendarContext.Provider>
  );
};
