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
   <div className="bg-white w-full rounded-lg shadow-md">
    <div className="rounded-t bg-white h-10 mb-0 px-6 pt-5 pb-10">
    <div className="flex justify-between">
                  <h6 className="block uppercase tracking-wide text-green-800 text-lg font-semibold">dashboard</h6>
    </div>
    </div>
    <div className="grid grid-cols-4 gap-4 mx-6">
  <div className="flex flex-col items-center border border-gray-300 pb-5">
    <span className="bg-dash1 w-40 h-10 px-4 py-2 rounded-xl text-white">
      Total Students
    </span>
    <span className="text-lg mt-2">{data.totalStudents}</span>
  </div>
  <div className="flex flex-col items-center border border-gray-300 pb-5">
    <span className="bg-dash2 w-40 h-10 px-4 py-2 rounded-xl text-white">
      Total Employees
    </span>
    <span className="text-lg mt-2">{data.totalEmployees}</span>
  </div>
  <div className="flex flex-col items-center border border-gray-300 pb-5">
    <span className="bg-dash3 w-40 h-10 px-4 py-2 rounded-xl text-white">
      Total Posts
    </span>
    <span className="text-lg mt-2">{data.totalPosts}</span>
  </div>
  <div className="flex flex-col items-center border border-gray-300 pb-5">
    <span className="bg-dash4 w-40 h-10 px-4 py-2 rounded-xl text-white">
      Total Logins
    </span>
    <span className="text-lg mt-2">{data.totalLogins}</span>
  </div>
</div>

        <h2 className="text-lg mx-5 mt-10">Logs: </h2>
        <div className="mx-5">
          {tableData.map((item, index) => (
            <div key={index} className="border p-2">
              <div className="text-sm ">created {item.role} at {formatTimestamp(item.createdAt)}</div>
            </div>
            ))}
         
      </div>
    </div>
 
    
  );
}
