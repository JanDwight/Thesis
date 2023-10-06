import React, { useState } from 'react';
import axiosClient from '../../../axios.js';

function EditLinks({ showModal, onClose, user, onSave,props }) {
  const [id, setid] = useState(link.id);
  const [class_code, setClassCode] = useState(link.class_code);
  const [class_description, setClassDescription] = useState(link.class_description);
  const [instructor_name, setInstructorName] = useState(link.instructor_name);
  const [url, setUrl] = useState(link.url);

  const handleSave = async() => {

    const updatedUserLinks = {
      id,
      class_code,
      class_description, 
      instructor_name,
      url,

    };

    try {
      const response = await axiosClient.put(`/updatelink/${link.id}`, updateLink);
      if (response.status === 200) {
        // Update was successful
        onSave(updatedUserLinks); // Pass the updated user data to the onSave function
        //onClose(); uncomment this line if frontend errors are fixed
      } else {
        // Handle errors or display feedback to the user
        console.error('Update failed');
      }
    } catch (error) {
      // Handle network errors or other exceptions
      console.error('Error:', error);
    }
  };

  if (!showModal) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-full lg:w-1/2 px-4 py-6 shadow-lg rounded-lg">
        <div className="w-full px-4 mx-auto mt-6">
          <p className="block uppercase tracking-wide font-semibold text-green-800 my-3">Update Links Information</p>
          <div>
            <form>
            <div className="mb-4">
                <label htmlFor="id" className="block text-sm text-gray-700">
                  ID:
                </label>
                <input
                  id="id"
                  name="id"
                  type="text"
                  value={id}
                  disabled //makes field uneditable
                  onChange={(e) => setid(e.target.value)}
                  className="block w-full rounded-md border border-gray-300 bg-gray-100 py-1.5 px-3 text-gray-700 shadow-sm focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="class_code" className="block text-sm text-gray-700">
                  Class Code:
                </label>
                <input
                  id="class_code"
                  name="class_code"
                  type="text"
                  value={class_code}
                  onChange={(e) => setClassCode(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="class_description" className="block text-sm text-gray-700">
                Class Description:
                </label>
                <select
                  id="class_description"
                  name="class_description"
                  defaultValue={class_description}
                  onChange={(e) => setClassDescription(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                >
                  <option value="admin">Admin</option>
                  <option value="staff">Staff</option>
                  <option value="instructor">Instructor</option>
                  <option value="student">Student</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="instructor_name" className="block text-sm text-gray-700">
                Instructor
                </label>
                <input
                  id="instructor_name"
                  name="instructor_name"
                  type="text"
                  value={instructor_name}
                  onChange={(e) => setInstructorName(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="lastedit" className="block text-sm text-gray-700">
                  Last Update:
                </label>
                <input
                  id="url"
                  name="url"
                  type="text"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  disabled //makes field uneditable
                  className="block w-full rounded-md border border-gray-300 bg-gray-100 py-1.5 px-3 text-gray-700 shadow-sm focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                  //old css: block w-full rounded-md border-0 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6
                />
              </div>
              <div className="text-center flex justify-end my-7">
              <button onClick={handleSave} className="bg-lime-600 hover:bg-lime-700 text-white font-bold py-2 px-4 mr-6 rounded-full">
                  Save Changes
                </button>
                <button onClick={onClose} className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    // ... (rest of your component code)
  );
}
export default EditLinks;