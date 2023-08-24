import React, { useState } from 'react';


export default function AddUsers({ showModal, onClose, fullName, setFullName, onSubmit }) {
  if (!showModal) {
    return null;
  }

  return (
    
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white w-full lg:w-1/2 px-4 py-6 shadow-lg rounded-lg">
            <div className="w-full px-4 mx-auto mt-6">           
                <p className="block uppercase tracking-wide font-semibold text-green-800 my-3">add user</p>
            <form onSubmit={onSubmit}>
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="fullName" className="block text-sm text-gray-600">
                  Full Name (first name, last name) :
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  autoComplete="fullName"
                  required
                  value={fullName}
                  onChange={ev => setFullName(ev.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 type=text" 
                />
              </div>
            </div>
            <div className="flex mb-4">
          <div className="w-3/4 pr-3">
            <label className=" text-gray-700 text-sm mb-2" htmlFor="grid-emailadd">Email Address</label>
            <input className="block w-full rounded-md border-0 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:leading-6 type=text"/>
          </div>
          <div className="w-1/3">
            <label className=" text-gray-700 text-sm mb-2" htmlFor="grid-accounttype">Account Type</label>
            <select className="block w-full rounded-md border-0 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:leading-6" id="accounttype">
                          <option>Admin</option>
                          <option>Instructor</option>
                          <option>Staff</option>
                          <option>Student</option>
                        </select>
          </div>
            <div>
              </div>
              </div>
              <div className="text-center flex justify-end my-7">
          <button onClick={onClose} className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 mr-6 rounded-full">
            Cancel
          </button>
          <button type="submit" className="bg-lime-600 hover:bg-lime-700 text-white font-bold py-2 px-4 rounded-full">
            Save
          </button>
            </div>
            </form>
          </div>
        </div>
        </div>
       
             
    

      
      
  
  );
}
