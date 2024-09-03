import React from 'react';
import styles from '../styles/Modal.module.css';

const EventModal = ({ event, onClose }) => {
  if (!event) return null;

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <h2>{event.title}</h2>
        <p>{event.date}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default EventModal;
