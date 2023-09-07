import {React, Fragment, useState} from "react";
import { Menu, Transition } from '@headlessui/react';
import ReactModal from 'react-modal';
import AddCourse from "../views_components/AddCourse";

export default function Curriculum(){
    const [isModalOpen, setIsModalOpen] = useState(false);

    return(
    <>
        <div className="w-full h-[500px] px-4 mx-auto  rounded-3xl bg-white shadow-2xl pt-5 pb-12">{/*For the Container*/}
            <div className="mt-5 mx-5 pb-5 border-b-2 border-black flex flex-row justify-between items-baseline">
                <div className="font-bold text-6xl text-[#525252]">Curriculum Checklist</div>
                {/*Filter and Add Courses */}
                <div className="flex flex-row">
                    <div>
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
                                    >
                                      3rd Year
                                    </a>
                                  )}
                                </Menu.Item>
                                <Menu.Item>
                                  {({ active }) => (
                                    <a
                                      className={`${active && 'bg-[#CCEFCC]'}`}
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
                            Add Course
                    </button>
                    </div>
            </div>
            <div className="m-5">
                <div className="mx-7 font-bold flex flex-col-10 flex justify-between">
                    <div>Class Year</div>
                    <div>Semester</div>
                    <div>Course Code</div>
                    <div>Course Title</div>
                    <div>Units</div>
                    <div>Hours/Week</div>
                    <div>Lec</div>
                    <div>Lab</div>
                    <div>Grade</div>
                    <div>Action</div> {/*Archive or Delete c*/}
                </div>

                <div className="mt-2">
                        <div className="bg-[#7EBA7E] rounded-full flex justify-between py-2 px-5 m-2 shadow-2xl">
                            <div>Class Year</div>
                            <div>Semester</div>
                            <div>Course Code</div>
                            <div>Course Title</div>
                            <div>Units</div>
                            <div>Hours/Week</div>
                            <div>Lec</div>
                            <div>Lab</div>
                            <div>Grade</div>
                            <div>Action</div>
                        </div>

                        <div className="bg-[#7EBA7E] rounded-full flex justify-between py-2 px-5 m-2 shadow-2xl">
                            <div>Class Year</div>
                            <div>Semester</div>
                            <div>Course Code</div>
                            <div>Course Title</div>
                            <div>Units</div>
                            <div>Hours/Week</div>
                            <div>Lec</div>
                            <div>Lab</div>
                            <div>Grade</div>
                            <div>Action</div>
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
                <AddCourse closeModal={() => setIsModalOpen(false)}/>
            </div>
        </ReactModal>
        
    </>
)}