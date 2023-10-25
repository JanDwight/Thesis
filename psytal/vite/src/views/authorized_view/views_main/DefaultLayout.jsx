import { Fragment, useState } from 'react'
import ReactModal from 'react-modal';
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, UserIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { NavLink, Navigate, Outlet } from 'react-router-dom'
import { useStateContext } from '../../../context/ContextProvider'
import axiosClient from '../../../axios'
import PsychLogo from '../../../assets/PsychCircle.png'
import UserProfile from '../views_components/profile_components/UserProfile'
import StudentProfile from '../views_components/profile_components/StudentProfile';

// const user = {
//   name: 'Tom Cook',
//   email: 'tom@example.com',
//   imageUrl:
//     'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
// }

const navigation = [
  { name: 'Home', to: '/student/home'},
  { name: 'Pre-Registration', to: '/student/preregistrationforcontinuing'},  
  { name: 'Links', to: '/student/linksforstudent'}  
]

const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function DefaultLayout() {
  // Calling the ProfilePopupSample
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  
  const {currentUser, userToken, setCurrentUser, setUserToken, setUserRole} = useStateContext();

  if (!userToken) {
    return <Navigate to='/guest/landingpage' />
  }

  const logout = (ev) => {
    ev.preventDefault();
    axiosClient.post('/logout')
      .then(res => {
        setCurrentUser({});
        setUserToken(null)
        setUserRole(null)
      })
  }
  console.log(currentUser)
  return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-[#588665]">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="h-14 w-14"
                        src={PsychLogo}
                        alt="Your Company"
                      />
                    </div>
                  </div>

                  <div className='w-1/2 '>
                    <form action="">
                      <input  id="search"
                        name="search"
                        type="text"
                        autoComplete="search"
                        placeholder='Search'
                        required
                        //value={fullName}
                        //onChange={ev => setFullName(ev.target.value)}
                        className="block w-full rounded-2xl border-0 py-1.5 bg-[#CCEFCC]  text-gray-900 shadow-sm ring-3 ring-[#487354] ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </form>
                  </div>

                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                      {/* Profile dropdown */}
                      <Menu as="div" className="relative ml-3">
                        <div>
                          <Menu.Button className="relative flex max-w-xs items-center rounded-full shadow-2xl shadow-black text-sm  focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">Open user menu</span>
                            <UserIcon className=' w-8 h-8 text-white' />
                          </Menu.Button> 
                        </div>

                        {/**Animation/Transitions */}
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <Menu.Item>
                              <button onClick={() => setIsProfileOpen(true)}
                                className={'block px-4 py-2 text-sm text-gray-700'}
                              >
                                Profile
                              </button>
                              
                            </Menu.Item>
                            <Menu.Item>
                              <button
                                onClick={(ev) => logout(ev)}
                                className={'block px-4 py-2 text-sm text-gray-700'}
                              >
                                Sign out
                              </button>
                            </Menu.Item>
                          </Menu.Items>
                        </Transition>
                      </Menu>
                      
                      {/**Notification */}
                      <button
                        type="button"
                        className="relative rounded-full p-1 ml-4 text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      >
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="h-7 w-7" aria-hidden="true" />
                      </button>                      
                    </div>
                  </div>
                  
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                  {navigation.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.to}
                      className={({ isActive }) => classNames(
                        isActive ? 'bg-gray-900 text-white' 
                                 : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'block rounded-md px-3 py-2 text-base font-medium'
                      )}
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
                <div className="border-t border-gray-700 pb-3 pt-4">
                  <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                    <UserIcon className=' w-8 h-8 rounded-full text-white bg-black' onClick={() => setIsProfileOpen(true)} />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium leading-none text-white">{'test'}</div>
                      <div className="text-sm font-medium leading-none text-gray-400">{'test'}</div>
                    </div>
                    <button
                      type="button"
                      className="relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="mt-3 space-y-1 px-2">
                      <Disclosure.Button
                        as="a"
                        href="#"
                        onClick={(ev) => logout(ev)}
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                      >
                        Sign out
                      </Disclosure.Button>
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        
        {/**Navbar */}
        <header className="flex bg-[#EFEFEF] h-14 items-center justify-center shadow">
        <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <NavLink
                            key={item.name}
                            to={item.to}
                            className={({ isActive }) => classNames(
                              isActive
                                ? 'bg-[#CCEFCC] text-[#737373]'
                                : 'text-[#737373] hover:bg-[#CCEFCC] hover:text-[#737373]',
                              'rounded-md px-3 py-2 text-sm font-medium'
                            )}
                          >
                            {item.name}
                          </NavLink>
                        ))}
                      </div>
                    </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            <Outlet />
          </div>
        </main>
      </div>
     {/**Setting the Profile Popup */}
     <ReactModal 
                                isOpen={isProfileOpen}
                                onRequestClose={() => setIsProfileOpen(false)}
                                className="w-full lg:w-[50%] bg-white rounded-3xl ring-1 ring-black shadow-2xl mt-[10%] mx-auto p-5"
                                >
                                  <div><StudentProfile closeModal={() => setIsProfileOpen(false)}/></div>
                                </ReactModal>
    </>
  )
}
