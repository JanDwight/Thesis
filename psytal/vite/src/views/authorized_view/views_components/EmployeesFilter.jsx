import React from 'react'
import { Menu, Transition } from '@headlessui/react';

export default function EmployeesFilter() {
  return (
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
                                          Admin
                                        </a>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                  {({ active }) => (
                                    <a
                                      className={`${active && 'bg-[#CCEFCC]'} border-b-2 border-black`}
                                    >
                                      Staff
                                    </a>
                                  )}
                                </Menu.Item>
                                <Menu.Item>
                                  {({ active }) => (
                                    <a
                                      className={`${active && 'bg-[#CCEFCC]'} border-b-2 border-black`}
                                    >
                                      Instructors
                                    </a>
                                  )}
                                </Menu.Item>
                                <Menu.Item>
                                  {({ active }) => (
                                    <a
                                      className={`${active && 'bg-[#CCEFCC]'}`}
                                    >
                                      Student
                                    </a>
                                  )}
                                </Menu.Item>
                                </div>
                            </Menu.Items>
                        </Menu>
    </div>
  )
}
