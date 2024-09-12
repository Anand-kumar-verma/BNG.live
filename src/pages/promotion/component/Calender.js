import React, { useState } from 'react';
import dayjs from 'dayjs';
import { ArrowBack, ArrowForward } from '@mui/icons-material';

const Calendar = ({ onDateSelect }) => {
  const [currentMonth, setCurrentMonth] = useState(dayjs());
  const [selectedDate, setSelectedDate] = useState(null);
  
  const startOfMonth = currentMonth.startOf('month');
  const endOfMonth = currentMonth.endOf('month');
  const daysInMonth = endOfMonth.date();
  const startDay = startOfMonth.day();
  
  const days = [];
  for (let i = 0; i < startDay; i++) {
    days.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }
  
  const rows = [];
  while (days.length) {
    rows.push(days.splice(0, 7));
  }
  
  const handlePreviousMonth = () => {
    setCurrentMonth(currentMonth.subtract(1, 'month'));
  };
  
  const handleNextMonth = () => {
    setCurrentMonth(currentMonth.add(1, 'month'));
  };

  const handleDateClick = (day) => {
    if (day) {
      const date = currentMonth.date(day);
      setSelectedDate(date);
      onDateSelect(date); // Notify parent component
    }
  };

  return (
    <div className=" p-2">
      <div className="flex items-center justify-between mb-4">
        <button 
          onClick={handlePreviousMonth} 
          className="bg-gray-200 p-2 rounded-md hover:bg-gray-300"
        >
        <ArrowBack/>
        </button>
        <div className="text-center text-2xl font-semibold">
          {currentMonth.format('MMMM YYYY')}
        </div>
        <button 
          onClick={handleNextMonth} 
          className="bg-gray-200 p-2 rounded-md hover:bg-gray-300"
        >
        <ArrowForward/>
        </button>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center text-xs font-semibold">
        <div className="p-2">Sun</div>
        <div className="p-2">Mon</div>
        <div className="p-2">Tue</div>
        <div className="p-2">Wed</div>
        <div className="p-2">Thu</div>
        <div className="p-2">Fri</div>
        <div className="p-2">Sat</div>
        {rows.map((week, index) => (
          <React.Fragment key={index}>
            {week.map((day, dayIndex) => (
              <div 
                key={dayIndex} 
                onClick={() => handleDateClick(day)} 
                className={`p-2 border border-gray-200 rounded-md ${day ? 'bg-white' : 'bg-transparent'} ${selectedDate && selectedDate.date() === day ? 'bg-yellow-300 font-bold' : ''}`}
              >
                {day || ''}
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
