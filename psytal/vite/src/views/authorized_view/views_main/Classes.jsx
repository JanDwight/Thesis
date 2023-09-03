import {React, Fragment, useState} from "react";
import { Menu, Transition } from '@headlessui/react';
import ReactModal from 'react-modal';
import AddClass from "../views_components/AddClass";

export default function Classes(){
    const [isModalOpen, setIsModalOpen] = useState(false);

    return(
    <>
        <div className="w-full h-[500px] rounded-3xl bg-white shadow-2xl pt-5 pb-12">{/*For the Container*/}
            <div className="mt-5 mx-5 pb-5 border-b-2 border-black flex flex-row justify-between items-baseline">
                <div className="font-bold text-4xl lg:text-6xl text-[#525252]">Classes</div>

                {/*Filter and Add classes */}
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
                    <button onClick={() => setIsModalOpen(true)} 
                        className="bg-[#0FE810] rounded-2xl  px-5 text-white font-size">
                            Add Class
                    </button>
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

                <div className="mx-7 flex flex-col-4 justify-between">
                    <div className="hidden md:hidden lg:contents">Course Code</div>
                    <div>Description</div>
                    <div>Year/Section</div>
                    <div className="hidden md:hidden lg:contents">Instructor</div>
                </div>

                <div className="mt-2">
                    <a href="https://classroom.google.com/" target="_blank" rel="noopener noreferrer"
                       className="bg-[#7EBA7E] rounded-full flex justify-between py-2 px-5 m-2 shadow-2xl">
                            <div className="hidden md:hidden lg:contents">Course Code</div>
                            <div>Description</div>
                            <div>Year/Section</div>
                            <div className="hidden md:hidden lg:contents">Instructor</div>
                    </a>
                    <a href="https://classroom.google.com/" target="_blank" rel="noopener noreferrer"
                       className="bg-[#7EBA7E] rounded-full flex justify-between py-2 px-5 m-2 shadow-2xl">
                            <div className="hidden md:hidden lg:contents">Course Code</div>
                            <div>Description</div>
                            <div>Year/Section</div>
                            <div className="hidden md:hidden lg:contents">Instructor</div>
                    </a>
                    <a href="https://classroom.google.com/" target="_blank" rel="noopener noreferrer"
                       className="bg-[#7EBA7E] rounded-full flex justify-between py-2 px-5 m-2 shadow-2xl">
                            <div className="hidden md:hidden lg:contents">Course Code</div>
                            <div>Description</div>
                            <div>Year/Section</div>
                            <div className="hidden md:hidden lg:contents">Instructor</div>
                    </a>
                </div>
            </div>
        </div>

        <ReactModal
            isOpen={isModalOpen}
            onRequestClose={() => setIsModalOpen(false)}
            className="w-[20%] h-[50%] bg-[#FFFFFF] rounded-3xl ring-1 ring-black shadow-2xl mt-[10%] mx-auto p-5"
        >
            <div>
                <AddClass closeModal={() => setIsModalOpen(false)}/>
            </div>
        </ReactModal>
        
    </>
)}