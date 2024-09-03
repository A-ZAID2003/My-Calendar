import { useContext } from 'react';
import { CalendarContext } from '../context/CalendarContext';

const useEvent = () => {
  const context = useContext(CalendarContext);
  if (!context) throw new Error("useEvent must be used within a CalendarProvider");
  return context;
};

export default useEvent;
