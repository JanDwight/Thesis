import React, { useState } from 'react';
import axiosClient from '../../../axios.js';

export default function EditClasses({ showModal, onClose, subject, onSave }) {
  const [classId, setClassId] = useState(subject.class_id);
  const [title, setTitle] = useState(subject.course_title);
  const [code, setCode] = useState(subject.course_code);
  const [instructor, setInstructor] = useState(subject.instructor_name);
  const [lastedit, setLastedit] = useState(subject.updated_at);

  const handleSave = async () => {
    // Create an object with the updated class data
    const updatedClass = {
      classId, // Assuming classId is still the same
      title,
      code,
      instructor,
      lastedit,
    };
  
    try {
      // Send a PUT request to update the class data
      console.log('Sending', classId);
      const response = await axiosClient.put(`/updateclasses/${classId}`, updatedClass);
  
      if (response.status === 200) {
        // Update was successful
        onSave(updatedClass); // Pass the updated class data to the onSave function
        // You can optionally close the modal or perform UI updates here
        console.log('Class Updated Successfully');
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
          <p className="block uppercase tracking-wide font-semibold text-green-800 my-3">Update Account Information</p>
          <div>
            <form>
            <div className="mb-4">
                <label htmlFor="classId" className="block text-sm text-gray-700">
                  Class ID:
                </label>
                <input
                  id="classId"
                  name="classId"
                  type="text"
                  value={classId}
                  disabled //makes field uneditable
                  //onChange={(e) => setClassId(e.target.value)}
                  className="block w-full rounded-md border border-gray-300 bg-gray-100 py-1.5 px-3 text-gray-700 shadow-sm focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="title" className="block text-sm text-gray-700">
                  Title:
                </label>
                <input
                  id="title"
                  name="title"
                  type="text"
                  value={title}
                  //onChange={(e) => setTitle(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="code" className="block text-sm text-gray-700">
                  Course Code:
                </label>
                <input
                  id="code"
                  name="code"
                  type="text"
                  value={code}
                  //onChange={(e) => setCode(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="instructor" className="block text-sm text-gray-700">
                  Instructor:
                </label>
                <input
                  id="instructor"
                  name="instructor"
                  type="text"
                  value={instructor}
                  //onChange={(e) => setInstructor(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="lastedit" className="block text-sm text-gray-700">
                  Last Update:
                </label>
                <input
                  id="lastedit"
                  name="lastedit"
                  type="text"
                  value={lastedit}
                  onChange={(e) => setLastedit(e.target.value)}
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