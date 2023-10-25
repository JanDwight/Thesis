import { Fragment, useState } from 'react'
import logo from "@assets/PsychCircle.png";
import dashboard from "@assets/icons8dashboard.png";
import home from "@assets/icons8home.png";
import file from "@assets/icons8file.png";
import users from "@assets/icons8adduser.png";
import avatar from "@assets/icons8avatar.png";
import link from "@assets/icons8link.png";
import classicon from "@assets/icons8book.png";
import ReactModal from 'react-modal';
import { NavLink, Navigate, Outlet } from 'react-router-dom';
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { UserIcon, BellIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { useStateContext } from '../../../context/ContextProvider';
import axiosClient from '../../../axios';
import UserProfile from '../views_components/profile_components/UserProfile';

const navigation = [
  { img: home, name: 'Home', to: 'home'},
  { img: classicon, name: 'Classes', to: 'classes'},
  { img: link, name: 'Links', to: 'links'}
]
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function InstructorLayout() {
  // Calling the ProfilePopupSample
  const [isInstructorProfileOpen, setIsInstructorProfileOpen] = useState(false);

  const {setCurrentUser, setUserToken, setUserRole, userToken} = useStateContext();

  if (!userToken) {
    return <Navigate to='/guest/landingpage' />
  }

  const logout = (ev) => {
    ev.preventDefault();
    axiosClient.post('/logout')
      .then(res => {
        setCurrentUser({});
        setUserToken(null);
        setUserRole(null)
      })
  }

  return (
    <>
      {/*NavBar*/}
      <div className="bg-white">
        <Disclosure as="nav" className="bg-[#588665]">
          {({ open }) => (
            <>
            <div className="flex-col flex">
          <div className="bg-viridian w-full border-b-2 border-gray-200">
            <div className=" h-16 justify-between items-center mx-auto px-10 flex">
              <div className='flex flex-row'>
                <div>
                  <img src= {logo}
                    className="block btn- h-11 w-auto" alt="Department of Psychology" />
                </div>
                <div className="hidden md:flex md:flex-col">
                  <p className="font-semibold text-sm ml-5 font-franklin text-white ">Department of</p>
                  <p className="font-semibold text-sm ml-6 font-franklin text-white">Psychology</p>
                </div>
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
                                <button onClick={()=>setIsInstructorProfileOpen(true)}
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
                    <UserIcon className=' w-8 h-8 rounded-full text-white bg-black' onClick={() => setIsInstructorProfileOpen(true)} />
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
        

        </div>
      
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

      {/**Setting up the Instructor Profile */}
      <ReactModal
        isOpen={isInstructorProfileOpen}
        onRequestClose={()=> setIsInstructorProfileOpen(false)}
        className="w-full lg:w-8/12 px-4 container h-fit bg-white rounded-3xl ring-1 ring-black shadow-2xl mt-[10%] mx-auto p-5 ">
        <div className='relative flex flex-col min-w-0 break-words w-full mt-3'>
          <UserProfile closeModal={()=>setIsInstructorProfileOpen(false)} />
        </div>
      </ReactModal>
    </>
  );
}