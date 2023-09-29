import React from 'react';
import ReactModal from 'react-modal';
import { useState } from 'react';
//good for now

console.log('AddUsers.jsx component is rendering');

export default function AddUsers({ showModal, onClose, fullName, setFullName, onSubmit, selectedAccountType, setSelectedAccountType,
                                   email, setEmail}) {

  const handleAccountTypeChange = (event) => {
    setSelectedAccountType(event.target.value);
  };

  if (!showModal) {
    return null;
  }

  return (
    <ReactModal
      appElement={document.getElementById('root')}
      isOpen={showModal}
      onRequestClose={onClose}
      className="w-[20%] h-fit mt-[10%] mx-auto" //it just works don't question
    >
    <div className="w-[20%] fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-[20%] h-fit bg-[#FFFFFF] rounded-3xl ring-1 ring-black shadow-2xl mx-auto p-5" tabindex="-1" role="dialog" aria-modal="true">           
        <div className='flex justify-center font-bold text-4xl text-[#525252] mt-5'>
        Add User
        </div>
          <form onSubmit={onSubmit}>
            <div className="mt-10">
              <input
                id="fullname"
                name="fullname"
                type="text"
                autoComplete="fullname"
                placeholder="Full Name"
                required
                value={fullName}
                onChange={ev => setFullName(ev.target.value)}
                className="block w-full rounded-md border-0 py-2 text-gray-700 shadow-sm ring-1 ring-inset ring-black placeholder-text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-5"
              />
            </div>
            <div className="mt-5">
              <input
                id="email"
                name="email"
                type="text"
                autoComplete="email"
                placeholder="Email"
                required
                value={email}
                onChange={ev => setEmail(ev.target.value)}
                className="block w-full rounded-md border-0 py-2 text-gray-700 shadow-sm ring-1 ring-inset ring-black placeholder-text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-5"
              />
            </div>
            <div className="mt-10 font-bold text-xl">
              Role:
            </div>
            <select
              className="block w-full rounded-md border-0 py-2 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder-text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:leading-5"
              id="accounttype"
              value={selectedAccountType}
              onChange={handleAccountTypeChange}
            >
              <option value="1">Admin</option>
              <option value="2">Staff</option>
              <option value="3">Instructor</option>
              <option value="4">Student</option>
            </select>
            <div className="grid grid-row-2 justify-center">
              
              <button type="submit" className="bg-[#0FE810] rounded-2xl mt-3 px-5 text-white text-lg font-bold">
                Save
              </button>
              <button type="button" onClick={onClose} className="bg-[#E2202C] rounded-2xl mt-3 px-5 text-white text-lg font-bold">
                Cancel
              </button>

            </div>
          </form>
      </div>
    </div>
    </ReactModal>
  );
}