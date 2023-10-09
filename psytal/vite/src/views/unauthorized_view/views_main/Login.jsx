import { useState } from 'react'
import axiosClient from '../../../axios';
import { useStateContext } from '../../../context/ContextProvider';
import PsychLogo from '../../../assets/PsychLogo.png';

export default function Login() {
  const {setCurrentUser, setUserToken, setUserRole, currenUser} = useStateContext();
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({__html: ""});
  const [userToken] = useState('');

  const onSubmit = (ev) => {
    ev.preventDefault();
    setError({ __html: "" });

    axiosClient
    .post('/login', {
      name: fullName,
      password,
    })
    .then(({ data }) => {
      setCurrentUser(data.user)
      setUserToken(data.token)
      setUserRole(data.role)
    })
    .catch(( error ) => {
      if (error.response) {
        const finalErrors = Object.values(error.response.data.errors).reduce((accum, next) => [...accum,...next], [])
        setError({__html: finalErrors.join('<br>')})
      }
        console.error(error)
    });
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-gradient-to-r from-green-800 via-green-500 to-green-800">
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">

        {error.__html && (
        <div className='bg-red-500 rounded py-2 px-2 text-white'
          dangerouslySetInnerHTML={error}>
        </div>)}
        
{/*box*/}

        <div className="box-border md:box-content bg-white p-9 shadow-2xl">
          
          <img
            className="mx-auto h-20 w-auto"
            src={PsychLogo}
            alt="psychology logo"
          />
          <h2 className="mt-3 text-center text-2xl leading-9 tracking-tight text-gray-400">
            Log In
          </h2>

          <form onSubmit={onSubmit} className="space-y-6" action="#" method="POST"> 
            <div>
              <label htmlFor="fullName" className="mt-5 block text-sm font-medium leading-6 text-gray-900">
                Full Name
              </label>
              <div className="mt-2"> 
                <input
                 placeholder={userToken}
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
                 placeholder='abcd123'
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
            <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-lime-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-lime-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>
          </div>

        </div>
      </div>
    </>
  )
}

