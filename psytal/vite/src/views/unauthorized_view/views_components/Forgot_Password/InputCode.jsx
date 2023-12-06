import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import axiosClient from '../../../../axios';

export default function InputCode() {
  const [userCode, setUserCode] = useState('');
  const location = useLocation();
  const formData = location.state ? location.state.formData : null;
  const [newPassword, setNewPassword] = useState('');

  const onSubmit = async (ev) => {
    ev.preventDefault();

    // Check if userCode matches the code in formData
    if (formData && userCode === formData.code) {
      // Code is correct, you can proceed with your logic
      console.log(formData);

      try {
        const response = await axiosClient.put('/changepassword', {
          email: formData.email,
        });

        // Assuming the API response structure is { new_password: 'your_password' }
        const newPasswordFromResponse = response.data.new_password;

        setNewPassword(newPasswordFromResponse);

        // Preparing formData to be sent to the backend
        const newFormData = new FormData();
        newFormData.append('newPassword', newPasswordFromResponse);
        newFormData.append('email', formData.email);

        await axiosClient.get('/sendnewpassword', {
          params: Object.fromEntries(newFormData), // Convert FormData to plain object
        });

        console.log(response.data); // You can handle the response as needed
      } catch (error) {
        console.error('Error updating password:', error);
        // Handle error appropriately
      }
    } else {
      // Code is incorrect, handle accordingly
      console.log('Code is incorrect');
      // Add your logic for incorrect code
    }
  };

  return (
    <>
      <div className='flex min-h-[100%] flex-1 flex-col items-center justify-center px-6 py-[12%] lg:px-8 bg-gradient-to-r from-green-800 via-green-500 to-green-800'>
        <div className='flex items-center justify-between'>
          <label htmlFor='password' className='block text-sm font-medium leading-6 text-gray-900'>
            Please Enter The Code We Sent You
          </label>
        </div>

        <form onSubmit={onSubmit} className='space-y-6' action='#' method='POST'>
          <div className=''>
            <input
              name='end'
              type='text'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
              value={userCode}
              onChange={(ev) => setUserCode(ev.target.value)}
            />
          </div>

          <div>
            <button
              type='submit'
              className='flex w-full justify-center rounded-md bg-lime-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-lime-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
            >
              Enter
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
