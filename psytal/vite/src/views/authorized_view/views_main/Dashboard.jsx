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
        // Call your fetchUserCount function and store the result in count
        const count_student = await fetchStudentCount(); //count students
        const count_employee = await fetchEmployeeCount(); //count employees
        const count_posts = await fetchPostCount();
        const show_logs = await fetchLogs();
        //count total logins, idk how to count
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
    fetchData();
  }, []);

  //fetch student count
  async function fetchStudentCount() {
    try {
      const response = await axiosClient.get('/users');
      const data = response.data;
      const student_count = data.reduce((acc, user) => {
        if (user.role === 4) {
          return acc + 1;
        }
        return acc;
      }, 0);
      return student_count;
    } catch (error) {
      console.error('Error fetching data from the database:', error);
    }
  }
  //fetch employee count
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
    }
  }
  //fetch post counts
  async function fetchPostCount() {
    try {
      const response = await axiosClient.get('/posts');
      const data = response.data;
      const postcount = data.length;
      return postcount;
    } catch (error) {
      console.error('Error fetching data from the database:', error);
    }
  }
  //fetch logs
  async function fetchLogs() {
    try {
      const response = await axiosClient.get('/logs');
      const data = response.data;
      return data;
    } catch (error) {
      console.error('Error fetching data from the database:', error);
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
        <h2 className="text-base font-semibold mt-8 mb-2">Archive: </h2>
        <div>
          {Logs_Data.length === 0 ? (
              <p>No archives available</p> //default string
              ) : (
              Logs_Data.slice(0, 5).map((logs_table, index) => (
                  <div key={index} className="border p-2">
                      <div className="text-sm ">{logs_table.action_taken} at {logs_table.date} by {logs_table.user_name} with role {logs_table.user_role} in {logs_table.location} table</div>
                  </div>
                    ))
          )}
          <div className="flex justify-between items-center">
            <button className="text-sm p-2 rounded ml-auto">More Archives...</button>
          </div>
        </div>
        {/**LOGS */}
        <h2 className="text-base font-semibold mt-5 mb-2">Logs: </h2>
        <div>
          {Logs_Data.length === 0 ? (
            <p>No logs available</p> //default string
            ) : (
            Logs_Data.slice(0, 5).map((logs_table, index) => (
                <div key={index} className="border p-2">
                    <div className="text-sm ">{logs_table.action_taken} at {logs_table.date} by {logs_table.user_name} with role {logs_table.user_role} in {logs_table.location} table</div>
                </div>
            ))
          )}
          <div className="flex justify-between items-center">
            <button className="text-sm p-2 rounded ml-auto">More Logs...</button>
          </div>
        </div>
    </div>
   </div>
    
  );
}
