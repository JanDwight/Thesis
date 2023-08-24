import React, { useState } from 'react';
import axiosClient from '../../../axios.js';
import { useStateContext } from '../../../context/ContextProvider.jsx';
import AddUsers from '../views_components/AddUsers.jsx';
import StudentList from '../views_components/StudentList.jsx';
import EmployeeList from '../views_components/EmployeeList.jsx';
import StudentsFilter from '../views_components/studentsfilter.jsx';

{/*Tab Highlight */}
const Tab = ({ label, isActive, onClick }) => {
  const activeClasses = isActive
    ? 'text-green-800 bg-gray-800 dark:text-gray-800 dark:bg-highlightGreen'
    : 'hover:text-gray-800 hover:bg-gray-50 dark:hover:text-gray-800 dark:hover:bg-highlightGreen';

  return (
    <li className=" mx-6">
      <a href="#" onClick={onClick} className={`inline-block p-4 rounded-t-lg ${activeClasses}`}>
        {label}
      </a>
    </li>
  );
};

export default function ManageUsers() {
  const { setCurrentUser, setUserToken } = useStateContext();
  const [fullName, setFullName] = useState(''); // Edit
  const [showModal, setShowModal] = useState(false); // State to control popup visibility
  const [error, setError] = useState({ __html: '' });
  const [activeTab, setActiveTab] = useState(1); // Initialize active tab

  const onSubmit = (ev) => {
    ev.preventDefault();
    setError({ __html: '' });

    axiosClient
      .post('/adduser', { name: fullName, password }) // Back end, needs to edited 
      .then(({ data }) => {
        setCurrentUser(data.user);
        setUserToken(data.token);
        setShowModal(false); // Close the popup after successful submission
      })
      .catch((error) => {
        if (error.response) {
          const finalErrors = Object.values(error.response.data.errors).reduce(
            (accum, next) => [...accum, ...next],
            []
          );
          setError({ __html: finalErrors.join('<br>') });
        }
        console.error(error);
      });
  };

  return (
    <div className="w-full px-4 mx-auto mt-0">
    <div className="rounded-t bg-white h-10 mb-0 px-6 py-6">
    <div className="flex justify-between">
                  <h6 className="block uppercase tracking-wide text-green-800 text-sm font-semibold">manage user accounts</h6>
    <button
        onClick={() => setShowModal(true)}
        className="bg-lime-600 hover:bg-lime-700 text-white text-sm font-semibold py-1 px-4 "
        
      >
        Add User
        
      </button>
      </div>
      </div>
      <ul className="flex mb-0 list-none flex-wrap py-3 px-4 flex-row text-gray-700">
        <Tab
          label="Students List"
          isActive={activeTab === 1}
          onClick={() => setActiveTab(1)}
        />
        <Tab
          label="Employees List"
          isActive={activeTab === 2}
          onClick={() => setActiveTab(2)}
        />

       
      </ul>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div className="px-4 py-5 flex-auto">
          <div className="tab-content tab-space">
            <div className={activeTab === 1 ? 'block' : 'hidden'} id="link1">
              <StudentList/>
            </div>
            <div className={activeTab === 2 ? 'block' : 'hidden'} id="link2">
            <EmployeeList/>
            </div>
           
          </div>
        </div>
      </div>
      
      <AddUsers //AddUser Modal
        showModal={showModal}
        onClose={() => setShowModal(false)}
        fullName={fullName}
        setFullName={setFullName} // Edit din dito
        onSubmit={onSubmit}
      />
    </div>

    
  

  );
}
