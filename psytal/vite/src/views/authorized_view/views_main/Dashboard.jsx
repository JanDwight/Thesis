import React, { useEffect, useState } from 'react';

export default function Dashboard() {
  const [data, setData] = useState({
    totalStudents: 0,
    totalEmployees: 0,
    totalPosts: 0,
    totalLogins: 0
  });

  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    //Paki Replace nalang
    // fetch('/api/dashboard')
    //   .then(response => response.json())
    //   .then(data => setData(data));
    
    // Sample data (Delete nalang after maconnect sa database)
    const simulatedData = {
      totalStudents: 45,
      totalEmployees: 7,
      totalPosts: 50,
      totalLogins: 34
    };
    
    setData(simulatedData);
    // Sample table data
    const simulatedTableData = [
      { role: 'Student', createdAt: 1678920600000 }, 
      { role: 'Employee', createdAt: 1678921800000 }, 
      { role: 'Student', createdAt: 1678930200000 },
      { type: 'Announcement', postAt: 1678930200000},
      { type: 'Class Suspension', postAt: 1678930200000}
     
    ];

    setTableData(simulatedTableData);
  
  }, []);

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const year = date.getFullYear();

    return `${hours}:${minutes}am-${month}/${day}/${year}`;
  };
  
  return (
    <div className="w-full h-[auto] px-4 mx-auto rounded-3xl bg-white shadow-2xl pt-5 pb-12">
    <div className="w-full px-4 mx-auto mt-0">
    <h1 className='text-3xl font-semibold my-5 text-green-700'>DASHBOARD</h1>
    <hr className="border-gray-400 mt-2 mb-5" />
    {/**COL TOTAL S-L */}
    <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>

      {/**Total Student */}
      <div className='md:col-span-1 lg:col-span-1 block rounded-3xl bg-white text-center drop-shadow-xl'>
        {/**----Head----- */}
        <div className='flex flex-col rounded-t-3xl items-center bg-dash1 border border-gray-300 pb-5 pt-5'>
          <span className='text-white font-semibold'>Total Students</span>
        </div>
        {/**----Body----- */}
        <div className='p-7'>
          <span className="text-4xl font-semibold text-green-600 mt-2">{data.totalStudents}</span>
        </div>
      </div>

      {/**Total Employees */}
      <div className='md:col-span-1 lg:col-span-1 block rounded-3xl bg-white text-center drop-shadow-xl '>
        {/**----Head---- */}
        <div className='flex flex-col rounded-t-3xl items-center bg-dash2 border border-gray-300 pb-5 pt-5'>
          <span className='text-white font-semibold'>Total Employees</span>
        </div>
        {/**----Body---- */}
        <div className='p-7'>
          <span className="text-4xl font-semibold text-green-600 mt-2">{data.totalEmployees}</span>
        </div>
      </div>

      {/**Total Post */}
      <div className='md:col-span-1 lg:col-span-1 block rounded-3xl bg-white text-center drop-shadow-xl'>
        {/**----Head---- */}
        <div className='flex flex-col rounded-t-3xl items-center bg-dash3 border border-gray-300 pb-5 pt-5'>
          <span className='text-white font-semibold'>Total Posts</span>
        </div>
        {/**----Body---- */}
        <div className='p-7'>
          <span className="text-4xl font-semibold text-green-600 mt-2">{data.totalPosts}</span>
        </div>
      </div>

      {/**Total Logins */}
      <div className='md:col-span-1 lg:col-span-1 block rounded-3xl bg-white text-center drop-shadow-xl'>
        {/**----Head---- */}
        <div className='flex flex-col rounded-t-3xl items-center bg-dash4 border border-gray-300 pb-5 pt-5'>
          <span className='text-white font-semibold'>Total Logins</span>
        </div>
        {/**----Body---- */}
        <div className='p-7'>
          <span className="text-4xl font-semibold text-green-600 mt-2">{data.totalLogins}</span>
        </div>
      </div>
    </div> 
  
    
    {/**Archive: */}
    <h2 className="text-base font-semibold mt-8 mb-2">Archive: </h2>
    <div>
      {tableData.map((item, index) => (
          <div key={index} className="border p-2">
              <div className="text-sm ">posted {item.type} at {formatTimestamp(item.postAt)}</div>
          </div>
            ))}
    </div>
    {/**LOGS */}
    <h2 className="text-base font-semibold mt-5 mb-2">Logs: </h2>
    <div>
        {tableData.map((item, index) => (
          <div key={index} className="border p-2">
              <div className="text-sm ">created {item.role} at {formatTimestamp(item.createdAt)}</div>
          </div>
            ))}
         
    </div>
   </div>
   </div>
    
  );
}
