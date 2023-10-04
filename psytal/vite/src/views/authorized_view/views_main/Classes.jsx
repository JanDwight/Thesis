import {React, Fragment, useState} from "react";
import { Menu, Transition } from '@headlessui/react';
import ReactModal from 'react-modal';
import AddClass from "../views_components/AddClass";
import ClassPopUp from "../views_components/ClassPopUp";
import ClassList from '../views_components/ClassList.jsx';

 {/*Tab Highlight */}
 const Tab = ({ label, isActive, onClick }) => {
  const activeClasses = isActive
    ? 'text-green-800 dark:text-gray-800 dark:bg-highlightGreen'
    : 'hover:text-gray-800 hover:bg-gray-50 dark:hover:text-gray-800 dark:hover:bg-highlightGreen';
    const labelClasses ='uppercase text-gray-600 text-xl';

  return (
    <li className="mx-6">
      <a
        href="#"
        onClick={onClick}
        className={`inline-block p-2 rounded-t-lg ${activeClasses} ${labelClasses}`}
      >
        {label}
      </a>
    </li>
  );
};

export default function Classes(){
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isClassModalOpen, setIsClassModalOpen] = useState(false);
    const [filterText, setFilterText] = useState(''); // Filter text state
    const [activeTab] = useState(1); // Initialize active tab

    return(
    <>
        <div className="w-full h-[500px] rounded-3xl bg-white shadow-2xl pt-5 pb-12">{/*For the Container*/}
            <div className="mt-5 mx-5 pb-5 border-b-2 border-black flex flex-row justify-between items-baseline">
                <div className="font-bold text-4xl lg:text-6xl text-[#525252]">Classes</div>

                {/*Filter and Add classes*/}
                <div className="flex flex-row">
                    <div className="hidden md:hidden lg:contents">
                        <Menu>
                            <Menu.Button className="relative mr-5 py-1 px-5 border-2 border-black">Filter</Menu.Button>
                            <Menu.Items className="absolute px-[7px] border-2 border-black bg-white">
                                <div className="flex flex-col">
                                <Menu.Item>
                                    {({ active }) => (
                                        <a
                                            className={`${active && 'bg-[#CCEFCC]'} border-b-2 border-black`}
                                        >
                                          1st Year
                                        </a>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                  {({ active }) => (
                                    <a
                                      className={`${active && 'bg-[#CCEFCC]'} border-b-2 border-black`}
                                    >
                                      2nd Year
                                    </a>
                                  )}
                                </Menu.Item>
                                <Menu.Item>
                                  {({ active }) => (
                                    <a
                                      className={`${active && 'bg-[#CCEFCC]'} border-b-2 border-black`}
                                      href="/account-settings"
                                    >
                                      3rd Year
                                    </a>
                                  )}
                                </Menu.Item>
                                <Menu.Item>
                                  {({ active }) => (
                                    <a
                                      className={`${active && 'bg-[#CCEFCC]'}`}
                                      href="/account-settings"
                                    >
                                      4th Year
                                    </a>
                                  )}
                                </Menu.Item>
                                </div>
                            </Menu.Items>
                        </Menu>
                    </div>
                    {/*add class*/}
                    <button onClick={() => setIsModalOpen(true)} 
                        className="bg-[#0FE810] rounded-2xl  px-5 text-white font-size">
                            Add Class
                    </button>
                    {/*search*/}

                    <div className="flex">
                        
                        <div className="my-4 mx-4" id="magnifying_glass">
                          <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                          </svg>
                        </div>
              
                        <input
                          id="search_bar"
                          type="text"
                          placeholder={
                            activeTab === 1
                              ? 'Search by ID, name, or year & section...'
                              : 'Search by name or role...'
                          }
                          value={filterText}
                          onChange={(event) => setFilterText(event.target.value)}
                          className="h-10 px-6 py-4 border border-gray-300 focus:ring-viridianHue focus:border-viridianHue rounded-lg"
                        ></input>
                    </div>

                </div>
            </div>

            <div className="m-5">
                <div className=" md:hidden lg:hidden">
                    <Menu>
                        <Menu.Button className="relative mr-5 py-1 px-5 border-2 border-black">Filter</Menu.Button>
                        <Menu.Items className="absolute px-[7px] border-2 border-black bg-white">
                            <div className="flex flex-col">
                            <Menu.Item>
                                {({ active }) => (
                                    <a
                                        className={`${active && 'bg-[#CCEFCC]'} border-b-2 border-black`}
                                    >
                                      1st Year
                                    </a>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  className={`${active && 'bg-[#CCEFCC]'} border-b-2 border-black`}
                                >
                                  2nd Year
                                </a>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  className={`${active && 'bg-[#CCEFCC]'} border-b-2 border-black`}
                                  href="/account-settings"
                                >
                                  3rd Year
                                </a>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  className={`${active && 'bg-[#CCEFCC]'}`}
                                  href="/account-settings"
                                >
                                  4th Year
                                </a>
                              )}
                            </Menu.Item>
                            </div>
                        </Menu.Items>
                    </Menu>
                </div>
                

                    {/* table */}
                    <div className="m-5">
                    <div className="">
                    <div className="">
                      <div>
                      {activeTab === 1 && (
                        <ClassList filterText={filterText} />
                      )}
                      </div>
                    </div>

                  </div>
                </div>

            </div>
        </div>

      <ReactModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        className="w-[20%] h-fit bg-[#FFFFFF] rounded-3xl ring-1 ring-black shadow-2xl mt-[10%] mx-auto p-5"
      >
        <div>
          <AddClass closeModal={() => setIsModalOpen(false)} />
        </div>
      </ReactModal>

      <ReactModal
        isOpen={isClassModalOpen}
        onRequestClose={() => setIsClassModalOpen(false)}
        className="w-[20%] h-fit bg-[#FFFFFF] rounded-3xl ring-1 ring-black shadow-2xl mt-[10%] mx-auto p-5"
      >
        <div>
          <ClassPopUp closeModal={() => setIsClassModalOpen(false)} />
        </div>
      </ReactModal>
      </>
)}