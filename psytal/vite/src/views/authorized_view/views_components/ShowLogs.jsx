import React, { useState } from 'react';
import axiosClient from '../../../axios.js';

export default function ShowLogTable({ showModal, onClose, dataTable}) {

  if (!showModal) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-full lg:w-1/2 px-4 py-6 shadow-lg rounded-lg">
        <p>Logs Here</p>
      </div>
    </div>
  );
}