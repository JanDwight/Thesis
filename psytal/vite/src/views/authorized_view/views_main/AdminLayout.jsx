import React from 'react'
import logo from "@assets/PsychLogo.png";
import notif from "@assets/iconbell.png";
import dashboard from "@assets/icons8dashboard.png";
import home from "@assets/icons8home.png";
import students from "@assets/icons8student.png";
import school from "@assets/icons8school.png";
import users from "@assets/icons8usersettings.png";
import settings from "@assets/icons8settings.png";
import image from "@assets/icons8image.png";
import create from "@assets/icons8createpost.png";
import avatar from "@assets/icons8avatar.png";

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
  <div className="flex pt-6">
  <aside class="flex flex-col w-60 h-50 px-5 py-2 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-1 ml-10 rounded-lg shadow-lg md:shadow-2xl  " >
    
    <div class="flex flex-col items-center mt-6 -mx-2">
        <img class="object-cover w-15 h-15 mx-2 rounded-full" src={avatar} alt="avatar"/>
        <h4 class="mx-2 mt-2 font-medium text-gray-800 dark:text-gray-600">John Doe</h4>
        <p class="mx-2 text-sm font-medium text-gray-600 dark:text-lime-600">Admin</p>
    </div>

    <div class="flex flex-col justify-between flex-1 mt-3">
        <nav>
            <a class="flex items-center px-4 py-2 text-gray-800 bg-gray-100 rounded-full dark:bg-lime-200 dark:text-gray-800" href="#">
            <img src= {home}
                className="block btn- h-5 w-auto" alt="Home" />
                <span class="mx-4 font-medium">Home</span>
            </a>

            <a class="flex items-center px-4 py-2 mt-2 text-gray-800 transition-colors duration-300 transform rounded-full dark:text-gray-500 hover:bg-gray-100 dark:hover:bg-lime-200 dark:hover:text-gray-800 hover:text-gray-700" href="#">
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
        </nav>
    </div>
</aside>

{/*Create Post*/}
<div className="w-1/2 ml-6">
  <div className="bg-gray-200 w-full h-34 rounded-md shadow-md">
  <div className="w-full h-10 flex justify-between px-3 md:px-10 lg:px-24 xl:px-5">
      <div className="flex h-full items-center">
        <img src={create} className="h-5 w-auto mt-2"/>
        <span className="text-xs lg:text-md mx-2 font-semibold text-gray-500 mt-2">Create Announcement </span>
        <img src={image} className="h-6 w-auto mt-2"/>
        <span className="text-xs lg:text-md mx-2 font-semibold text-gray-500 mt-2"> Attach Photo / File</span>
      </div>
  </div>
        <div className="w-full h-16 flex items-center justify-between px-5">
        <input type="text" className="w-full rounded-full h-8 bg-white px-6 py-0 border-none focus:ring-green-700 text-xs m-5" placeholder="Type Post . . ." />
        </div>
        <div className="flex items-center justify-end md:px-10 pb-2">
          <button className="bg-neonGreen hover:bg-lime-500 h-6 text-white font-bold px-3 rounded-full">Post</button>
          
</div>
    </div>
  </div>
</div>
{/*Post article */}

<div class="max-w-4xl px-10 my-4 py-6 bg-white rounded-lg shadow-md">
        <div class="flex justify-between items-center">
            <span class="font-light text-gray-600">mar 10, 2019</span>
            <a class="px-2 py-1 bg-gray-600 text-gray-100 font-bold rounded hover:bg-gray-500" href="#">Design</a>
        </div>
        <div class="mt-2">
            <a class="text-2xl text-gray-700 font-bold hover:text-gray-600" href="#">Accessibility tools for designers and developers</a>
            <p class="mt-2 text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!</p>
        </div>
        <div class="flex justify-between items-center mt-4">
            <a class="text-blue-600 hover:underline" href="#">Read more</a>
            <div>
                <a class="flex items-center" href="#">
                    <img class="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block" src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=373&q=80" alt="avatar"/>
                    <h1 class="text-gray-700 font-bold">Khatab wedaa</h1>
                </a>
            </div>
        </div>
    </div>
    


    </>
  );
}
 