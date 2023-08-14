import React, { useState } from 'react'
import axiosClient from '../../../axios.js'
import { useStateContext } from '../../../context/ContextProvider.jsx';

export default function AddUser() {
  const {setCurrentUser, setUserToken} = useStateContext();
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({ __html: "" });

  const onSubmit = (ev) => {
    ev.preventDefault();
    setError({ __html: "" });

    axiosClient
      .post('/adduser', {
        name: fullName,
        password,
    })
    .then(({ data }) => {
      setCurrentUser(data.user)
      setUserToken(data.token)
    })
    .catch(( error ) => {
      if (error.response) {
        const finalErrors = Object.values(error.response.data.errors).reduce((accum, next) => [...accum,...next], [])
        console.log(finalErrors)
        setError({__html: finalErrors.join('<br>')})
      }
        console.error(error)
    });
  };
  
  return (
    <div>

        {error.__html && (
        <div className='bg-red-500 rounded py-2 px-2 text-white'
          dangerouslySetInnerHTML={error}>
        </div>)}

        <form onSubmit={onSubmit} className="space-y-6" action='#' method="POST">
        <div>
              <div className="flex items-center justify-between">
                <label htmlFor="fullName" className="block text-sm font-medium leading-6 text-gray-900">
                  Full Name
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  autoComplete="fullName"
                  required
                  value={fullName}
                  onChange={ev => setFullName(ev.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            
            

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={ev => setPassword(ev.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>
    </div>
  )
}
