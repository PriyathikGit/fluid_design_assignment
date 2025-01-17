import React from 'react';

const AttendanceLog = () => {
  const logs = [
    { date: '01-10-24', status: 'Present', clockIn: '10:02 AM', clockOut: '7:00 PM', duration: '9 hrs 2 min', action: "Get Approval" },
    { date: '30-09-24', status: 'Present', clockIn: '10:45 AM', clockOut: '7:15 PM', duration: '9 hrs 2 min', action: "Get Approval" },
    { date: '29-09-24', status: 'Absent', clockIn: '--', clockOut: '--', duration: '--', action: "Get Approval" },
    { date: '28-09-24', status: 'Present', clockIn: '10:10 Am', clockOut: '7:30 Pm', duration: '9 hrs 2 min', action: "Get Approval" },
    { date: '27-09-24', status: 'Weekly Off', clockIn: '--', clockOut: '--', duration: '--', action: "Get Approval" },
    { date: '26-09-24', status: 'Anomaly', clockIn: '10:10 Am', clockOut: 'AC', duration: '00:00', action: "Get Approval" },
    { date: '25-09-24', status: 'Present', clockIn: '10:10 Am', clockOut: '7:00 pm', duration: '--', action: "Get Approval" },
  ];

  return (
    <div className="bg-white shadow rounded w-full h-auto">
      <div className='flex justify-around h-16 items-center border-b-[1px] border-slate-300'>
        <div className='h-full content-center border-b-2 md:w-[15rem] border-black'>
          <h2 className="font-semibold text-lg text-textbg text-center">Attendance Log</h2>
        </div>
        <div className='h-full content-center md:w-[15rem]'>
          <h2 className="font-normal text-lg text-textGray text-center">Leave Log</h2>
        </div>

      </div>
      <div className='px-4 py-8'>
        <span className='font-medium text-xl'>Attendance log</span>
      </div>
      <div className="overflow-x-auto p-4">
        <table className="min-w-full border-collapse border border-gray-200 rounded-xl">
          <thead>
            <tr className="">
              <th className="border-b-[1px] border-gray-300 px-4 py-2 font-medium text-left">Date</th>
              <th className="border-b-[1px] border-gray-300 px-4 py-2 font-medium text-left">Status</th>
              <th className="border-b-[1px] border-gray-300 px-4 py-2 font-medium text-left">Clock In</th>
              <th className="border-b-[1px] border-gray-300 px-4 py-2 font-medium text-left">Clock Out</th>
              <th className="border-b-[1px] border-gray-300 px-4 py-2 font-medium text-left">Duration</th>
              <th className="border-b-[1px] border-gray-300 px-4 py-2 font-medium text-left">Action</th>
            </tr>
          </thead>
          <tbody className='mt-6'>
            {logs.map((row, index) => (
              <tr key={index} className="h-16">
                <td className="border-b-[1px] border-gray-300 px-4 py-2">{row.date}</td>
                <td className="border-b-[1px] border-gray-300 px-4 py-2 text-gray-500 font-normal">{row.status}</td>
                <td className="border-b-[1px] border-gray-300 px-4 py-2 text-gray-500 font-normal">{row.clockIn}</td>
                <td className="border-b-[1px] border-gray-300 px-4 py-2 text-gray-500 font-normal">{row.clockOut}</td>
                <td className="border-b-[1px] border-gray-300 px-4 py-2 text-gray-500 font-normal">{row.duration}</td>
                <td className="border-b-[1px] border-gray-300 px-4 py-2">
                  <button className="underline">{row.action}</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="text-end mt-4 mr-16">
          <button className="underline">View More</button>
        </div>
      </div>
    </div>
  );
};

export default AttendanceLog;
