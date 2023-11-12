import React from 'react';
import axiosClient from '../../../../axios';
import { useState } from 'react';

export default function InputCode() {
    const [email, setEmail] = useState('');

    const onSubmit = (ev) => {
      ev.preventDefault();
      setError({ __html: "" });
  
      axiosClient
        .get('/forgotpassword', {
        params: email
      })

      
    };
    
  return (
    <> 
        <div className='flex min-h-full flex-1 flex-col items-center justify-center px-6 py-12 lg:px-8 bg-gradient-to-r from-green-800 via-green-500 to-green-800'>
            <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                      Please Enter The Code We Sent You
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
                    Enter
                  </button>
                </div>
            </form>
        </div>
    </>
  )
}
