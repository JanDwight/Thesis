import React, { useState } from 'react';
import axiosClient from '../../../axios.js';

export default function ArchiveCourse({showArchivecourse, onClose, course}) {
  const handleSave = async() => {

    try {
      // send selected user to archive controller
      const response = await axiosClient.put(`/archivecurriculum/${course.id}`);

      console.log('Course archived successfully.');

      // Close the modal
      (onClose);
    } catch (error) {
      // Handle errors here, e.g., display an error message
      console.error('Error archiving course:', error);
    }
  }

      if (!showArchivecourse) {
        return null;
      }
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-full lg:w-1/2 px-4 py-6 shadow-lg rounded-lg">
        <div className="w-full px-4 mx-auto mt-6">
          <p className="block uppercase tracking-wide font-bold text-green-800 my-3 text-center">Archive Course?</p>
          <form class="text-center">
            <br></br>
            <div className="flex items-center justify-center flex-row"> 
              <label htmlFor="course" className="px-6 font-bold">Selected Course:</label>
              <input
                id="course"
                type="text"
                name="course"
                value={course.course_code}
                disabled // makes field uneditable
                className="block w-1/3 rounded-md border border-gray-300 bg-gray-100 py-1.5 px-3 text-gray-700 shadow-sm focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
              />
            </div>
            <br></br>
            <p>Archiving a course will make it uneditable. </p>
            <p>Are you sure you want to proceeed?</p>
          </form>
          <div className="flex items-center justify-center my-7 space-x-4">
            <button onClick={handleSave} className="bg-lime-600 hover:bg-lime-700 text-white font-bold py-2 px-4 rounded-full">
                Archive
            </button>
            <button onClick={onClose} className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
                Cancel
            </button>
            </div>
        </div>
      </div>
    </div>
  );
}
