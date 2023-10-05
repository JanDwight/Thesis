import React, { useEffect, useState } from 'react';
import axiosClient from '../../../axios.js';

export default function Dashboard() {
  const [dash, setDash] = useState({
    totalStudents: 0,
    totalEmployees: 0,
    totalPosts: 0,
    totalLogins: 0
  });

  const [Archive_Data, setArchiveData] = useState([]); //connect later
  const [Logs_Data, setLogsData] = useState([]);

  useEffect(() => {
    
    async function fetchData() {
      try {
        const count_student = await fetchDataCount('/count_students');
        const count_employee = await fetchDataCount('/count_employee');
        const count_posts = await fetchDataCount('/count_posts');
        //count total logins, idk how to count

        const show_logs = await fetchLogs();
        //const show_archives (how to)
        
        const responseData = {
          totalStudents: count_student,
          totalEmployees: count_employee,
          totalPosts: count_posts,
          totalLogins: 'IP'
        };
        
        setDash(responseData);

        const Logs_Table = show_logs.map(log => ({
          action_taken: log.action_taken,
          user_name: log.user_name,
          user_role: log.user_role,
          location: log.location,
          date: log.date,
        }));

        setLogsData(Logs_Table);

      } catch (error) {
        // Handle any errors that occurred during the fetch
        console.error('Error in useEffect:', error);
      }
    }

     //fetch all data counts
      async function fetchDataCount(endpoint) {
        try {
          const response = await axiosClient.get(endpoint);
          return response.data;
        } catch (error) {
          console.error('Error fetching data from the database:', error);
        }
      }

      //fetch logs
      async function fetchLogs() {
        try {
          const response = await axiosClient.get('/show_logs');
          const data = response.data;
          return data;
        } catch (error) {
          console.error('Error fetching data from the database:', error);
        }
      }

    fetchData();
  }, []);

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
              <span className="text-4xl font-semibold text-green-600 mt-2">{dash.totalStudents}</span>
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
              <span className="text-4xl font-semibold text-green-600 mt-2">{dash.totalEmployees}</span>
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
              <span className="text-4xl font-semibold text-green-600 mt-2">{dash.totalPosts}</span>
            </div>
          </div>

          {/**Total Logins 
           * marked as pending IGNORE
          */}
          <div className='md:col-span-1 lg:col-span-1 block rounded-3xl bg-white text-center drop-shadow-xl'>
            {/**----Head---- */}
            <div className='flex flex-col rounded-t-3xl items-center bg-dash4 border border-gray-300 pb-5 pt-5'>
              <span className='text-white font-semibold'>Total Logins</span>
            </div>
            {/**----Body---- */}
            <div className='p-7'>
              <span className="text-4xl font-semibold text-green-600 mt-2">{dash.totalLogins}</span>
            </div>
          </div>
        </div> 
      
        
        {/**Archive: */}
        <h2 className="text-base font-semibold mt-8 mb-2">Recent Archives: </h2>
        <div>
          {Logs_Data.map((logs_table, index) => (
            <div key={index} className="border p-2">
              <div className="text-sm ">
                {logs_table.action_taken} at {logs_table.date} by {logs_table.user_name} with role {logs_table.user_role} in {logs_table.location} table
              </div>
            </div>
          ))}
          <div className="flex justify-between items-center">
            <button className="text-gray-500 hover:text-black text-sm p-2 rounded ml-auto">
              More Archives...
            </button>
          </div>
        </div>
        {/**LOGS */}
        <h2 className="text-base font-semibold mt-5 mb-2">Recent Logs: </h2>
        <div>
          {Logs_Data.map((logs_table, index) => (
            <div key={index} className="border p-2">
              <div className="text-sm ">
                {logs_table.action_taken} at {logs_table.date} by {logs_table.user_name} with role {logs_table.user_role} in {logs_table.location} table
              </div>
            </div>
          ))}
          <div className="flex justify-between items-center">
            <button className="text-gray-500 hover:text-black text-sm p-2 rounded ml-auto">
              More Logs...
            </button>
          </div>
        </div>
    </div>
   </div>
    
  );
}
