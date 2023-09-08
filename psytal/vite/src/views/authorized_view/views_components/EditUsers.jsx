import React, { useState } from 'react';

export default function EditUsers({ showModal, onClose, user, onSave }) {
  const [number, setNumber] = useState(user.number);
  const [role, setRole] = useState(user.role);
  const [fullName, setFullName] = useState(user.fullName);
  const [others, setOthers] = useState(user.others);

  const handleSave = () => {
    const updatedUser = {
      number,
      role,
      fullName,
      others,
    };

    onSave(updatedUser);
  };

  if (!showModal) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-full lg:w-1/2 px-4 py-6 shadow-lg rounded-lg">
        <div className="w-full px-4 mx-auto mt-6">
          <p className="block uppercase tracking-wide font-semibold text-green-800 my-3">Edit User Information</p>
          <div>
            <form>
              <div className="mb-4">
                <label htmlFor="number" className="block text-sm text-gray-700">
                  ID Number:
                </label>
                <input
                  id="number"
                  name="number"
                  type="text"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="role" className="block text-sm text-gray-700">
                  Role:
                </label>
                <select
                  id="role"
                  name="role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                >
                  <option value="admin">Admin</option>
                  <option value="staff">Staff</option>
                  <option value="instructor">Instructor</option>
                  <option value="student">Student</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="fullName" className="block text-sm text-gray-700">
                  Full Name:
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="others" className="block text-sm text-gray-700">
                  Others:
                </label>
                <input
                  id="others"
                  name="others"
                  type="text"
                  value={others}
                  onChange={(e) => setOthers(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div className="text-center flex justify-end my-7">
                <button onClick={onClose} className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 mr-6 rounded-full">
                  Cancel
                </button>
                <button onClick={handleSave} className="bg-lime-600 hover:bg-lime-700 text-white font-bold py-2 px-4 rounded-full">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}