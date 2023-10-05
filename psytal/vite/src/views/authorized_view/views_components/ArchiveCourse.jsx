import React, { useState } from 'react';
import axiosClient from '../../../axios.js';

export default function ArchiveCourse({showArchivecourse, onClose, curriculum}) {

  const handleSave = async() => {

    try {
      // send selected course to archive controller
      const response= await axiosClient.put(`/archivecurriculum/${curriculum.id}`);
      console.log(response.data);
      console.log('Course archived successfully.');

      // Close the modal
      onClose();
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
              <form>
                <h1 className='font-bold text-3xl text-[#525252] flex items-center justify-center pb-5'>Archive Course?</h1>
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
