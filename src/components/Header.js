import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Header.module.css'; // Add this CSS module for header styles

const Header = () => (
  <header className={styles.header}>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/add-event">Add Event</Link>
    </nav>
  </header>
);

export default Header;
