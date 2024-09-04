// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import { CalendarProvider } from './context/CalendarContext';
import CalendarPage from './pages/CalendarPage';
import EventDetailsPage from './pages/EventDetailsPage';

const App = () => (
  <CalendarProvider>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<CalendarPage />} />
        <Route path="/event/:id" element={<EventDetailsPage />} />
      </Routes>
    </Router>
  </CalendarProvider>
);

export default App;
