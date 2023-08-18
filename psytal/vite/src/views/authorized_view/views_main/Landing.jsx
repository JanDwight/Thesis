import React, { Fragment, useState, useEffect } from 'react';
import { NavLink, Navigate, Outlet } from 'react-router-dom'
import { Disclosure } from '@headlessui/react'; 
import logo from "@assets/PsychLogo.png";

const navigation = [
    { name: 'Landing Page', to: 'landingpage'},
    { name: 'Login', to: 'login'},
    { name: 'About us', to: 'aboutus'}
  ]
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  

  export default function Landing(){
    const [navbarSolid, setNavbarSolid] = useState(false);

    useEffect(() => {
      const scrollHandler = () => {
        if (window.scrollY > 10) {
          setNavbarSolid(true);
        } else {
          setNavbarSolid(false);
        }
      };
  
      window.addEventListener('scroll', scrollHandler);
  
      return () => {
        window.removeEventListener('scroll', scrollHandler);
      };
    }, []);
  
    const navbarClassName = classNames(
      'bg-gray-800 transition duration-300 ease-in-out',
      {
        'bg-opacity-90 backdrop-blur-sm shadow-lg': navbarSolid,
        'bg-transparent': !navbarSolid,
      }
    );
  
    return(
        <>
        <div className="min-h-full">
          <Disclosure as="nav" className={navbarClassName}>
            {({ open }) => (
              <>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                  <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <img
                          className="h-8 w-8"
                          src={logo}
                          alt="Department of Psychology"
                        />
                      </div>
                      <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                          {navigation.map((item) => (
                            <NavLink
                              key={item.name}
                              to={item.to}
                              className={({ isActive }) => classNames(
                                isActive
                                  ? 'bg-gray-900 text-white'
                                  : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                'rounded-md px-3 py-2 text-sm font-medium'
                              )}
                            >
                              {item.name}
                            </NavLink>
                          ))}
                        </div>
                      </div>
                    </div>
                    {/* Rest of the code */}
                  </div>
                </div>
                {/* Rest of the code */}
              </>
            )}
          </Disclosure>
          {/* Rest of the code */}
        </div>
      </>
          
    )
  }
  