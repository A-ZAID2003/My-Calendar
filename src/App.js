import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import CalendarPage from './pages/CalendarPage';
// import EventDetailsPage from './pages/EventDetailsPage';
import Header from './components/Header';
import { CalendarProvider } from './context/CalendarContext';
import CalendarPage from './pages/CalendarPage';
import EventDetailsPage from './pages/EventDetailsPage'; // Ensure this file exists if used
// import { CalendarProvider } from './context/CalendarContext';

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
