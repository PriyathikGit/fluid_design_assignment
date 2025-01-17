import React, { useState } from 'react';
import { Calendar } from "./ui/calendar"
import Holidays from './Holidays';

const Calender = () => {
  const [date, setDate] = useState(Date.now())


  return (
    <div className="bg-white shadow py-4 rounded w-full md:w-[30%] md:ml-6 space-y-12">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className='md:w-full h-auto'
      />

      <Holidays/>
    </div>
  );
};

export default Calender;
