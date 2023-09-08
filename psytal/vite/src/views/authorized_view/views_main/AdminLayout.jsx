import { Fragment, useState } from 'react'
import logo from "@assets/PsychCircle.png";
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
import { EllipsisHorizontalIcon ,MagnifyingGlassIcon, UserIcon, BellIcon, Bars3Icon } from '@heroicons/react/24/solid'
import { useStateContext } from '../../../context/ContextProvider';
import axiosClient from '../../../axios';

const navigation = [
  { img: home, name: 'Home', to: 'home'},
  { img: dashboard, name: 'Dashboard', to: 'dashboard'},
  { img: users, name: 'Manage Accounts', to: 'manageusers'},
  { img: classicon, name: 'Classes', to: 'classes'},
  { img: file, name: 'Pre-registration', to: 'preregistration'},
  { img: link, name: 'Links', to: 'links'},
  { img: curriculum, name: 'Curriculum', to: 'curriculum'}
]
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function AdminLayout() {
  const {setCurrentUser, setUserToken, setUserRole, userToken} = useStateContext();
  const [isSearchToggled, setIsSearchToggled] = useState(false);

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
      <div className="bg-white">
      {/*NavBar*/}
        <div className="flex-col flex">
          <div className="bg-viridian w-full border-b-2 border-gray-200">
            <div className=" h-16 justify-between items-center mx-auto px-10 flex">
              <div>
                <img src= {logo}
                  className="block h-11 w-auto" alt="Department of Psychology" />
              </div>

              <div className="hidden md:flex md:flex-col">
                <p className="font-semibold text-sm ml-5 font-franklin text-white ">Department of</p>
                <p className="font-semibold text-sm ml-6 font-franklin text-white">Psychology</p>
              </div>

              {/*Search*/}
                <div className='px-[20%] md:hidden '>
                  {!isSearchToggled && (
                    <button onClick={() => {setIsSearchToggled(!isSearchToggled)}}>
                      <MagnifyingGlassIcon className='w-10 h-10 text-[white]'/>
                    </button>
                  )}

                  <Transition className='flex flex-row'
                    show={isSearchToggled}
                    enter="transition-transform transition-opacity ease-out duration-300"
                    enterFrom="opacity-0 transform translate-x-0"
                    enterTo="opacity-100 transform -translate-x-[50%]"
                    leave="transition-transform transition-opacity ease-in duration-300"
                    leaveFrom="opacity-100 transform translate-x-0"
                    leaveTo="opacity-0 transform translate-x-0"
                  >
                    {isSearchToggled && (
                      <button onClick={() => {setIsSearchToggled(!isSearchToggled)}}>
                        <MagnifyingGlassIcon className='w-10 h-10 text-[white]'/>
                      </button>
                    )}

                    <Transition
                    show={isSearchToggled}
                    enter="transition-transform transition-opacity ease-out duration-300"
                    enterFrom="opacity-0 transform translate-x-0"
                    enterTo="opacity-100 transform -translate-x-[100%]"
                    leave="transition-transform transition-opacity ease-in duration-900"
                    leaveFrom="opacity-100 transform translate-x-[100%]"
                    leaveTo="opacity-0 transform translate-x-[50%]"
                    >
                      <input type="text" className='bg-white w-10'/>
                    </Transition>
                  </Transition>
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

                {/*Mobile Menu*/}
                <Menu as='div' className='relative z-50'>
                  <div className=''>
                    <Menu.Button>
                      <Bars3Icon className='w-10 h-10 text-white'/>
                    </Menu.Button>
                  </div>
                  
                  <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                    <Menu.Items className='absolute -right-10 w-[450%] origin-bottom-left py-5  bg-[#D9D9D9] rounded-3xl'>
                      {navigation.map((item) => (
                        <Menu.Item key={item.name}>
                          {({active}) => (
                            <NavLink
                              key={item.name}
                              to={item.to}
                              className={({isActive}) => classNames(
                                isActive
                                ? 'bg-[#CCEFCC]  text-[#757575]'
                                : 'text-[#757575] hover:bg-gray-200 hover:text-black',
                                'rounded-full px-3 py-1 text-sm font-medium flex items-center mt-5'
                              )}
                            >
                              <img src={item.img} className='w-10  pr-5'/>
                              {item.name}
                            </NavLink>
                          )}
                        </Menu.Item>
                      ))}
                    
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>
        </div>
    
    
      {/*sidebar*/}
      <div className="flex justify-start px-10 pt-5"> {/*Main container */}
          <aside class="max-h-[60vh] min-h-[60vh] flex flex-col w-60 h-50 px-5 py-5 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-1 rounded-lg shadow-lg md:shadow-2xl  " >
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

      {/**<!--Footer--> */}
    <footer className='bg-neutral-100 text-center text-gray-500 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left mt-[1%]'>
      {/**<!-- Social icons --> */}
      <div className='border-b-2 border-neutral-200 p-3 dark:border-neutral-500'>
        <div className='container mx-auto px-10'>
          <div className='flex items-center justify-center lg:justify-between'>
            <div className='mr-12 hidden lg:block'>
              <span>Get connected with us on social networks:</span>
            </div>
            <div className='flex justify-center'>
              {/**FB */}
              <a href="#!" className="mr-6 text-gray-500 dark:text-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              {/**Twitter */}
              <a href="#!" className="mr-6 text-gray-500 dark:text-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>

              <a a href="#!" className="mr-6 text-gray-500 dark:text-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div> {/**End of Social Icons */}

      {/**<!-- Main footer content --> */}
      <div className='container mx-auto px-4'>
        <div className='mx-6 py-3 text-center md:text-left'>
          <div className='grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4'>
            {/**----------------COL1------------- */}
            <div>
              <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
                <svg xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="mr-3 h-4 w-4">
                  <path d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z"/>
                </svg>
                Psychology Department
              </h6>
              <p>Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </div>
            {/**----------------COL2------------- */}
            <div>
              <h6 className='mb-4 flex justify-center font-semibold uppercase md:justify-start'>
                About Psychology Department
              </h6>
              <p className='mb-4'>
                <a href="#!" class="text-gray-500 dark:text-neutral-200">Misson</a>
              </p>
              <p className='mb-4'>
                <a href="#!" class="text-gray-500 dark:text-neutral-200">Visson</a>
              </p>
              <p className='mb-4'>
                <a href="#!" class="text-gray-500 dark:text-neutral-200">Goals</a>
              </p>
            </div>
            {/**---------------COL3------------- */}
            <div>
              <h6 className='mb-4 flex justify-center font-semibold uppercase md:justify-start'>
                Useful Links
              </h6>
              <p className='mb-4'>
                <a href="#!" class="text-gray-500 dark:text-neutral-200">Help</a>
              </p>
            </div>

            {/**--------------COL4------------- */}
            <div>
              <h6 className='mb-4 flex justify-center font-semibold uppercase md:justify-start'>
                Contact
              </h6>
              <p className='mb-4 flex items-center justify-center md:justify-start'>
                <svg xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="mr-3 h-5 w-5">
                  <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z"/>
                  <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z"/>
                </svg>
                Km.5 La Trinidad, Benguet
                </p>
                <p className='mb-4 flex items-center justify-center md:justify-start'>
                  <svg xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="mr-3 h-5 w-5">
                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"/>
                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"/>
                  </svg>
                  psychology@gmail.com
                </p>
                <p className='mb-4 flex items-center justify-center md:justify-start'>
                  <svg xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="mr-3 h-5 w-5">
                    <path fill-rule="evenodd"
                      d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                      clip-rule="evenodd"/>
                  </svg>
                  +63 9000 0000 000
                </p>
            </div>
          </div>
        </div>
      </div> {/** Enf of the Main Foter Content */}

      {/**<!-- Copyrights --> */}
      <div className='bg-neutral-200 p-3 text-center dark:bg-neutral-700'>
        <span>© 2023 Copyright:</span>
        <a font-semibold text-neutral-600 dark:text-neutral-400>Psychology Department</a>
      </div> {/**End of copyrights */}
    </footer>{/**End Footer */}
    </>
  );
}