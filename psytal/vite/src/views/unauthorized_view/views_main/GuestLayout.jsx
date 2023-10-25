import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { NavLink, Navigate, Outlet } from 'react-router-dom'
import { useStateContext } from '../../../context/ContextProvider'
import { useState, useEffect } from 'react';
import logo from "@assets/PsychCircle.png";
import {link} from 'react-scroll'

const navigation = [
  { name: 'Pre-Registration', to: 'preregistration'},
  { name: 'Pre-Registration Continuing', to: 'preregistrationforcontinuing'},
  { name: 'Home', to: 'landingpage'},
  { name: 'Login', to: 'login'}
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function GuestLayout() {
  const {userToken, userRole} = useStateContext();
  const [isNavbarTransparent, setIsNavbarTransparent] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsNavbarTransparent(false);
      } else {
        setIsNavbarTransparent(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  if (userToken && userRole === 1) {
    return <Navigate to='/admin/home' />
  }else if (userToken && userRole === 2){
    return <Navigate to='/staff/home' />
  }else if (userToken && userRole === 3){
    return <Navigate to='/instructor/home' />
  }else if (userToken && userRole === 4) {
    return <Navigate to='/student/home' />
  }



  return (
    <>
      <div className="relative">
      <Disclosure as="nav" className={`fixed w-full z-20 ${isNavbarTransparent ? 'bg-transparent' : 'bg-gray-600'}`}>
          {({ open }) => (
            <>
             <div className="flex justify-between items-center px-10 py-3">
                    <div className="flex items-center">
                      <img
                        className="h-20 w-20"
                        src={logo}
                        alt="Department of Psychology"/>
                         <div className="flex flex-col px-2 ">
                            <p className="font-semibold text-sm ml-2 font-franklin text-white ">Department of</p>
                            <p className="font-semibold text-sm ml-2 font-franklin text-white">Psychology</p>
                      </div>
                    </div>
                    <div className="hidden md:flex space-x-4">
                      <div className="ml-10 flex items-baseline space-x-4">

                      {navigation.map((item) => {
                      return (
                        <NavLink
                        key={item.name}
                        to={item.to}
                        className={({ isActive }) => classNames(    isActive
                          ? 'bg-black text-white'
                          : 'text-gray-300 hover:bg-gray-500 hover:text-white',
                        'rounded-md px-3 py-2 text-sm font-medium'
                      )}
                    >
                          {item.name}
                        </NavLink>
                      );
                    })}
                       
                      </div>
                    </div>
                 
                  {/*Background*/}
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

              <Disclosure.Panel className="md:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                  {navigation.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.to}
                    
                      className={({ isActive }) => classNames(
                        isActive ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'block rounded-md px-3 py-2 text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
                
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <main >
        <div className="h-screen">
            <Outlet />
          </div>
        </main>
      </div>
    </>
  )
}
