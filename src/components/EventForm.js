import React, { useState } from 'react';
import { useContext } from 'react';
import { CalendarContext } from '../context/CalendarContext';
import styles from '../styles/Form.module.css';

const EventForm = ({ event, onSubmit }) => {
  const [title, setTitle] = useState(event ? event.title : '');
  const [date, setDate] = useState(event ? event.date : '');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, date });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Event Title"
        required
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <button type="submit">Save Event</button>
    </form>
  );
};

export default EventForm;
