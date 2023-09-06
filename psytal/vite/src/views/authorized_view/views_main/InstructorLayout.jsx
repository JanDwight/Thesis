import { Fragment } from 'react'
import logo from "@assets/PsychLogo.png";
import dashboard from "@assets/icons8dashboard.png";
import home from "@assets/icons8home.png";
import file from "@assets/icons8file.png";
import users from "@assets/icons8adduser.png";
import avatar from "@assets/icons8avatar.png";
import link from "@assets/icons8link.png";
import curriculum from "@assets/icons8curriculum.png";
import classicon from "@assets/icons8book.png";
import { NavLink, Navigate, Outlet } from 'react-router-dom';
import { Menu, Transition } from '@headlessui/react'
import { UserIcon, BellIcon } from '@heroicons/react/24/solid'
import { useStateContext } from '../../../context/ContextProvider';
import axiosClient from '../../../axios';

const navigation = [
  { img: home, name: 'Home', to: 'home'},
  { img: classicon, name: 'Classes', to: 'classes'},
  { img: link, name: 'Links', to: 'links'}
]
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function InstructorLayout() {
  const {setCurrentUser, setUserToken, setUserRole, userToken} = useStateContext();

  if (!userToken) {
    return <Navigate to='/landingpage' />
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
        <div className="flex-col flex">
          <div className="bg-viridian w-full border-b-2 border-gray-200">
            <div className=" h-16 justify-between items-center mx-auto px-10 flex">
              <div>
                <img src= {logo}
                  className="block btn- h-11 w-auto" alt="Department of Psychology" />
                  </div>
              <div className="flex flex-col">
              <p className="font-semibold text-sm ml-5 font-franklin text-white ">Department of</p>
              <p className="font-semibold text-sm ml-6 font-franklin text-white">Psychology</p>
              </div>
              <div className="lg:block mr-auto ml-40 hidden relative max-w-">
              <p className="pl-3 items-center flex absolute inset-y-0 left-0 pointer-events-none">
              <span className="justify-center items-center flex">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                      </span>
                </p>
                <input placeholder="Type to search" type="search" className="border border-viridianHue focus:ring-white focus:border-white sm:text-sm w-full rounded-lg py-2 pl-10 pr-20 bg-viridianHue text-white"/>
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
              </div>
            </div>
          </div>
        </div>
    
    
      {/*sidebar*/}
      <div className="flex justify-start items-center px-10 pt-5"> {/*Main container */}
        <aside class="flex flex-col w-60 h-50 px-5 py-5 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-1 rounded-lg shadow-lg md:shadow-2xl  " >
          <div class="flex flex-col items-center mt-6 -mx-2">
            <img class="object-cover w-15 h-15 mx-2 rounded-full" src={avatar} alt="avatar"/>
            <h4 class="mx-2 mt-2 font-medium text-gray-800 dark:text-gray-600">John Doe</h4>
            <p class="mx-2 text-sm font-medium text-gray-600 dark:text-lime-600">Admin</p>
          </div>

          <div class="flex flex-col justify-between mt-2">
            {navigation.map((item) => (
                          
                          <NavLink
                            key={item.name}
                            to={item.to}
                            className={({label, isActive, onClick }) => classNames(
                              isActive
                                ? 'bg-lime-300  text-black'
                                : 'text-gray-600 hover:bg-gray-200 hover:text-black',
                              'rounded-full px-3 py-1 text-sm font-medium flex items-center mt-5'
                            )}
                          >
                            <img src={item.img} className='w-10  pr-5'/>
                            {item.name}
                          </NavLink>
                        ))}
       
          </div>
        </aside>
            <div className="flex flex-col w-3/4 pd-10 ml-10 ">
            <Outlet />
            </div>
        
        
      </div>
    </>
  );
}