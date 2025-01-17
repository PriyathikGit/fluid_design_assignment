import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import AttendanceLog from './components/Attendance_log'
import Calender from './components/Calendar'

function App() {

  return (
    <div className="flex h-full w-full bg-[#F8FAFC]">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="w-full flex flex-col">
        {/* Header */}
        <Header />


        <div className="md:px-6 py-4 flex flex-col gap-6">
          <div className="flex w-full md:flex-row flex-col-reverse">
              <AttendanceLog />
            <Calender />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App
