// components/CalendarView.js

import React, { useContext } from 'react';
import { CalendarContext } from '../context/CalendarContext';
import styles from '../styles/Calendar.module.css';

const CalendarView = () => {
  const { events } = useContext(CalendarContext);

  return (
    <div className={styles.calendar}>
      {events.map(event => (
        <div key={event.id} className={styles.event}>
          <h3>{event.title}</h3>
          <p>{event.date}</p>
        </div>
      ))}
    </div>
  );
};

export default CalendarView;
