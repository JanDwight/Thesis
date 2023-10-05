import React, { useEffect, useState } from 'react';
import axiosClient from '../../../axios.js';

export default function Dashboard() {
  const [data, setData] = useState({
    totalStudents: 0,
    totalEmployees: 0,
    totalPosts: 0,
    totalLogins: 0
  });

  const [tableData, setTableData] = useState([]); //delete later
  const [Archive_Data, setArchiveData] = useState([]);
  const [Logs_Data, setLogsData] = useState([]);

  useEffect(() => {
    
    async function fetchData() {
      try {
        // Call your fetchUserCount function and store the result in count
        const count_student = await fetchStudentCount(); //count students
        const count_employee = await fetchEmployeeCount(); //count employees
        const show_logs = await fetchLogs();
        //count total posts *use postcontroller index
        //count total logins, idk how to count
        const updatedData = {
          totalStudents: count_student,
          totalEmployees: count_employee,
          totalPosts: 50,
          totalLogins: 34
        };
        
        setData(updatedData);
        // Sample table data
        const tableData = [
          { role: 'Student', createdAt: 1678920600000 }, 
          { role: 'Employee', createdAt: 1678921800000 }, 
          { role: 'Student', createdAt: 1678930200000 },
          { type: 'Announcement', postAt: 1678930200000},
          { type: 'Class Suspension', postAt: 1678930200000}
          //# of items here influence the number of rows
          //retrieve axios files here
        ];

        const Logs_Table = show_logs.map(log => ({
          action_taken: log.action_taken,
          user_name: log.user_name,
          user_role: log.user_role,
          location: log.location,
          date: log.date,
        }));

        setTableData(tableData);
        setLogsData(Logs_Table);

      } catch (error) {
        // Handle any errors that occurred during the fetch
        console.error('Error in useEffect:', error);
      }
    }
    fetchData();
  }, []);

  //fetch student count
  async function fetchStudentCount() {
    try {
      const response = await axiosClient.get('/users');
      const data = response.data;
      //const count = data.length;
      const student_count = data.reduce((acc, user) => {
        if (user.role === 4) {
          return acc + 1;
        }
        return acc;
      }, 0);
      return student_count;
    } catch (error) {
      console.error('Error fetching data from the database:', error);
      throw error; // Rethrow the error for handling in the component
    }
  }
  //fetch employees
  async function fetchEmployeeCount() {
    try {
      const response = await axiosClient.get('/users');
      const data = response.data;
      const employee_count = data.reduce((acc, user) => {
        if (user.role >= 1 && user.role <= 3) {
          return acc + 1;
        }
        return acc;
      }, 0);
      return employee_count;
    } catch (error) {
      console.error('Error fetching data from the database:', error);
      throw error; // Rethrow the error for handling in the component
    }
  }
  //fetch logs
  async function fetchLogs() {
    try {
      const response = await axiosClient.get('/logs');
      const data = response.data;
      //const logcount = data.length;
      //return logcount;
      return data;
    } catch (error) {
      console.error('Error fetching data from the database:', error);
      throw error; // Rethrow the error for handling in the component
    }
  }


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
                  <div className="text-sm ">posted {item.type} at {item.postAt}</div>
              </div>
                ))}
        </div>
        {/**LOGS */}
        <h2 className="text-base font-semibold mt-5 mb-2">Logs: </h2>
        <div>
            {Logs_Data.map((logs_table, index) => (
              <div key={index} className="border p-2">
                  <div className="text-sm ">{logs_table.action_taken} at {logs_table.date} by {logs_table.user_name} with role {logs_table.user_role} in {logs_table.location}</div>
              </div>
                ))}
        </div>
    </div>
   </div>
    
  );
}
