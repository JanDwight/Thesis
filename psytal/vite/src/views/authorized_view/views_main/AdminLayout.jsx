import React from 'react'
import logo from "@assets/PsychLogo.png";
import notif from "@assets/iconbell.png";
import dashboard from "@assets/icons8dashboard.png";
import home from "@assets/icons8home.png";
import students from "@assets/icons8student.png";
import school from "@assets/icons8school.png";
import users from "@assets/icons8usersettings.png";
import settings from "@assets/icons8settings.png";
import avatar from "@assets/icons8avatar.png";
import { NavLink, Outlet } from 'react-router-dom';

const navigation = [
  { img: home, name: 'Home', to: 'home'},
  { img: dashboard, name: 'Dashboard', to: 'dashboard'},
  { img: students, name: 'Students', to: '/preregistration'},
  { img: home, name: 'Add User', to: '/adduser'}
]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function AdminLayout() {

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
              <div className="pt-0 pr-0 pb-0 pl-0 mt-0 mr-20 mb-0 ml-0">
                        <span className="items-center justify-center flex">
                        <img src= {notif}
                        className="block btn- h-6 w-auto" alt="notifications" />
                        </span>
                    
                </div>
                <div className="justify-center items-center flex relative">
                  <img src= {avatar}
                    className="object-cover btn- h-8 w-8 rounded-full mr-2 bg-gray-300" alt="" />
                  
                </div>
              </div>
            </div>
          </div>
        </div>
    
    
      {/*sidebar*/}
      <div className="flex justify-center items-center pt-6">
        <aside class="flex flex-col w-60 h-50 px-5 py-10 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-1 rounded-lg shadow-lg md:shadow-2xl  " >


          <div class="flex flex-col items-center mt-6 -mx-2">
            <img class="object-cover w-15 h-15 mx-2 rounded-full" src={avatar} alt="avatar"/>
            <h4 class="mx-2 mt-2 font-medium text-gray-800 dark:text-gray-600">John Doe</h4>
            <p class="mx-2 text-sm font-medium text-gray-600 dark:text-lime-600">Admin</p>
          </div>

          <div class="flex flex-col justify-between flex-1 mt-3">
            
            {navigation.map((item) => (
                          
                          <NavLink
                            key={item.name}
                            to={item.to}
                            
                            className={({ isActive }) => classNames(
                              isActive
                                ? 'bg-lime-200 text-gray-700'
                                : 'text-gray-800 hover:bg-lime-200 hover:text-gray-700',
                              'rounded-full px-3 py-2 text-sm font-medium flex items-center mt-5'
                            )}
                          >
                            <img src={item.img} className='w-12  pr-5'/>
                            {item.name}
                          </NavLink>
                        ))}
            
            
            {/*<nav>
              <a class="flex items-center px-4 py-2 text-gray-800 bg-gray-100 rounded-full dark:bg-lime-200 dark:text-gray-800" href="/home">
                <img src= {home}
                  className="block btn- h-5 w-auto" alt="Home" />
                  <span class="mx-4 font-medium">Home</span>
              </a>

              <a class="flex items-center px-4 py-2 mt-2 text-gray-800 transition-colors duration-300 transform rounded-full dark:text-gray-500 hover:bg-gray-100 dark:hover:bg-lime-200 dark:hover:text-gray-800 hover:text-gray-700" href="/admin/dashboard">
                <img src= {dashboard}
                  className="block btn- h-5 w-auto" alt="school" />
                  <span class="mx-4 font-medium">Dashboard</span>
              </a> 

              <a class="flex items-center px-4 py-2 mt-2 text-gray-800 transition-colors duration-300 transform rounded-full dark:text-gray-500 hover:bg-gray-100 dark:hover:bg-lime-200 dark:hover:text-gray-800 hover:text-gray-700" href="#">
                <img src= {school}
                  className="block btn- h-5 w-auto" alt="school" />
                  <span class="mx-4 font-medium">School Setup</span>
              </a> 

              <a class="flex items-center px-4 py-2 mt-2 text-gray-800 transition-colors duration-300 transform rounded-full dark:text-gray-500 hover:bg-gray-100 dark:hover:bg-lime-200 dark:hover:text-gray-800 hover:text-gray-700" href="#">
                <img src= {students}
                  className="block btn- h-5 w-auto" alt="students" />
                  <span class="mx-4 font-medium">Students</span>
              </a>

              <a class="flex items-center px-4 py-2 mt-2 text-gray-800 transition-colors duration-300 transform rounded-lg dark:text-gray-500 hover:bg-gray-100 dark:hover:bg-lime-200 dark:hover:text-gray-800 hover:text-gray-700" href="#">
                <img src= {users}
                  className="block btn- h-5 w-auto" alt="users" />
                  <span class="mx-4 font-medium">Users</span>
              </a>

              <a class="flex items-center px-4 py-2 mt-2 text-gray-800 transition-colors duration-300 transform rounded-lg dark:text-gray-500 hover:bg-gray-100 dark:hover:bg-lime-200 dark:hover:text-gray-800 hover:text-gray-700" href="#">
                <img src= {settings}
                  className="block btn- h-5 w-auto" alt="users" />
                  <span class="mx-4 font-medium">Settings</span>
              </a>
            </nav>*/}
          </div>
        </aside>

        <Outlet />
        

      </div>
    </>
  );
}
 