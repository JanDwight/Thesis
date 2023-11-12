import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory
import axiosClient from '../../../../axios';

export default function InputEmail() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate(); // Use useNavigate instead of useHistory
  const [code, setCode] = useState('');

  


  const onSubmit = async (ev) => {
    ev.preventDefault();

    // Generate a 4-digit random code
    const randomCode = Math.floor(1000 + Math.random() * 9000);
    setCode(randomCode.toString());

    //preparing formData to be sent to backend
    let formData = new FormData();

    // Append some data to the FormData object
    formData.append('code', code);
    formData.append('email', email);

    // Convert FormData to an object
    let formDataObject = Array.from(formData.entries()).reduce((obj, [key, value]) => {
      obj[key] = value;
      return obj;
    }, {});
    
    console.log(code);
    
    try {
      const response = await axiosClient.get('/forgotpasswordsendemail', {
        params:  formDataObject 
      });

      if (response.data && response.data.success) {
        navigate('/code'); // Use navigate instead of history.push
      } else {
        console.error('Password reset failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <div className='flex min-h-full flex-1 flex-col items-center justify-center px-6 py-12 lg:px-8 bg-gradient-to-r from-green-800 via-green-500 to-green-800'>
        <div className="flex items-center justify-between">
          <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
            Please Enter Your Email
          </label>
        </div>

        <form onSubmit={onSubmit} className="space-y-6" action="#" method="POST">
          <div className=''>
            <input
              name="end"
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 "
              value={email}
              onChange={ev => setEmail(ev.target.value)}
            />
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-lime-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-lime-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Send Code
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
