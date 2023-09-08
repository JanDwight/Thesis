import React from 'react';

export default function ArchiveUsers({ showModal, onClose }) {
  if (!showModal) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-full lg:w-1/2 px-4 py-6 shadow-lg rounded-lg">
        <div className="w-full px-4 mx-auto mt-6">
          <p className="block uppercase tracking-wide font-bold text-green-800 my-3 text-center">Archive User?</p>
          <form class="text-center">
            {/* Archive user form/prompt/warning? content goes here */}
            <p>Archiving a user will make it uneditable and hidden from low level users. 
                Are you sure you want to proceeed?</p>
          </form>
          <div className="flex items-center justify-center my-7 space-x-4">
            <button onClick={onClose} className="bg-lime-600 hover:bg-lime-700 text-white font-bold py-2 px-4 rounded-full">
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