import React, { useState } from 'react';
import axiosClient from '../../../axios.js';

export default function ArchiveCourse({showArchivecourse, onClose, curriculum}) {
  

  const handleSave = async(e) => {
    e.preventDefault();
    console.log("before");
    try {
      console.log("archiving");
      // send selected course to archive controller
      
      const response = await axiosClient.put(`/archivecurriculum/${curriculum.id}`);
      console.log(response.data);
      

      // Close the modal
      //onClose();
    } catch (error) {
      // Handle errors here, e.g., display an error message
      console.error('Error archiving course', error);
    }
  }

  if (!showArchivecourse) {
        return null;
      }

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-gray-200 w-full lg:w-3/12 px-4 py-6 shadow-lg rounded-3xl">
            <div className="w-full px-4 mx-auto">
              <form >
                <h1 className='font-bold text-3xl text-[#525252] flex items-center justify-center pb-5'>Archive Course?</h1>
                <div className="flex items-center justify-center flex-row"> 
                  <label htmlFor="curriculum" className="px-6 font-bold">Selected Course:</label>
                  <input
                    id="curriculum"
                    type="curriculum"
                    name="curriculum"
                    //value="Class 01"
                    value={curriculum.course_title}
                    disabled // makes field uneditable
                    className="block w-1/3 rounded-md border border-gray-300 bg-gray-100 py-1.5 px-3 text-gray-700 shadow-sm focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                  />
                </div>
                    {/**BUTTONS */}
                    <div className="text-center flex justify-end my-2">
                        {/**YES */}
                        <button onClick={handleSave} className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 mr-6 w-full rounded-full">
                            Yes
                        </button>
                        {/**NO */}
                        <button onClick={onClose} type='submit' className="bg-lime-600 hover:bg-lime-700 text-white font-bold py-2 px-4 w-full rounded-full">
                            No
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  );
}
