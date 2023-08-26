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
    ? 'text-green-800 dark:text-gray-800 dark:bg-highlightGreen'
    : 'hover:text-gray-800 hover:bg-gray-50 dark:hover:text-gray-800 dark:hover:bg-highlightGreen';
    const labelClasses ='uppercase text-gray-600 text-sm';

  return (
    <li className="mx-6">
      <a
        href="#"
        onClick={onClick}
        className={`inline-block p-2 rounded-t-lg ${activeClasses} ${labelClasses}`}
      >
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
  const [filterText, setFilterText] = useState(''); // Filter text state

  const onSubmit = (ev) => {
    ev.preventDefault();
    setError({ __html: '' });

    axiosClient
      .post('/adduser', { name: fullName, password }) // Back end, needs edit
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
    <div className="rounded-t bg-white h-10 px-6 pt-5 pb-12">
    <div className="flex justify-between">
    <h6 className="block uppercase tracking-wide text-green-700 text-base font-semibold">manage user accounts</h6>
    
    <button
        onClick={() => setShowModal(true)}
        className="bg-lime-600 hover:bg-lime-700 text-white text-sm font-semibold py-1 px-4 "
        
      >
        Add User
        
      </button>
      </div>
      </div>
      <ul className="flex mb-0 list-none flex-wrap px-4 flex-row text-gray-700">
        <Tab
          label="students list"
          isActive={activeTab === 1}
          onClick={() => setActiveTab(1)}
        />
        <Tab
          label="employees list"
          isActive={activeTab === 2}
          onClick={() => setActiveTab(2)}
        />
        <div className="flex px-8">
          <div className="my-2 mx-2">
                    <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    </div>     
        {/* Search bar */}
        <input
              type="text"
              placeholder={
                activeTab === 1
                  ? 'Search by ID, name, or year & section...'
                  : 'Search by name or role...'
              }
              value={filterText}
              onChange={(event) => setFilterText(event.target.value)}
              className="h-8 px-4 py-3 border border-gray-300 focus:ring-viridianHue focus:border-viridianHue  rounded-lg"
            />
        </div>
      </ul>
      <hr className="border-gray-300 mx-4" />
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div className="px-4 py-5 flex-auto">
          <div className="tab-content tab-space">
          {activeTab === 1 && (
              <StudentList filterText={filterText} />
            )}
            {activeTab === 2 && (
              <EmployeeList filterText={filterText} />
            )}
           
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
