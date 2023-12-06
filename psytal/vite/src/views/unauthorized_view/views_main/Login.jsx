import { useState } from 'react'
import axiosClient from '../../../axios';
import { useStateContext } from '../../../context/ContextProvider';
import PsychLogo from '../../../assets/PsychCircle.png';
import { NavLink } from 'react-router-dom';

export default function Login() {
  const {setCurrentUser, setUserToken, setUserRole} = useStateContext();
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({__html: ""});
  const [userRole, currentUser, userToken] = useState('');

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

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <div className="flex min-h-[100%] flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="mt-10 sm:mx-auto sm:w-[100%] sm:max-w-sm">

        {error.__html && (
        <div className='bg-red-500 rounded py-2 px-2 text-white'
          dangerouslySetInnerHTML={error}>
        </div>)}
        
{/*box*/}

        <div className="box-border md:box-content rounded-3xl bg-gradient-to-r from-[#739072]/80 via-gray-400/80 to-[#739072]/80 p-9 shadow-2xl">
          
          <img
            className="mx-auto h-20 w-auto"
            src={PsychLogo}
            alt="psychology logo"
          />
          <h2 className="mt-3 text-center text-2xl font-franklin leading-9 tracking-tight text-gray-900">
            Login to PSYTAL
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
                  className="block w-[100%] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                  type={isVisible ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={ev => setPassword(ev.target.value)}
                  className="block w-[100%] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <div>
                  <label onClick={toggleVisibility} className='text-blue-400 text-sm text px-2 mb-2'>
                    {isVisible ? "Hide Password" : "Show Password"}
                  </label>
                </div>
              </div>
            </div>
            <div className="text-sm">
            <NavLink to="/forgotpassword" className="font-semibold text-indigo-600 hover:text-indigo-500">
              Forgot password?
            </NavLink>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-[100%] justify-center rounded-md bg-[#397439] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#367E18] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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
