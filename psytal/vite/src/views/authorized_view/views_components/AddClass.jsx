import React from 'react';
import ReactModal from 'react-modal';

export default function AddClass({closeModal}) {
  return (
    <>
    <ReactModal appElement={document.getElementById('root')}> </ReactModal>
        <div className='flex justify-center font-bold text-4xl text-[#525252] mt-5'>
        Add Class
        </div>
        <div>
            <form action="">
              <div className='mt-5'>
                      <input
                        id="course_title"
                        name="course_title"
                        type="text"
                        placeholder='Course Title'
                        //value={instructor}
                        //onChange={ev => setInstructor(ev.target.value)}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 type=text" 
                      />
                </div>
                <div className='mt-5 flex flex-col-2 justify-between'>
                    <input
                      id="courseCode"
                      name="courseCode"
                      type="text"
                      placeholder='Course Code'
                      //value={courseCode}
                      //onChange={ev => setCourseCode(ev.target.value)}
                      className="block w-[49%] rounded-md border-0 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 type=text" 
                    />

                    <select
                      id="coursetype"
                      name="coursetype"
                      // value={coursetype}
                      // onChange={ev => setCourseType(ev.target.value)}
                      className="block w-[49%] rounded-md border-0 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                    >
                      <option value="Lecture">Lecture</option>
                      <option value="Laboratory">Laboratory</option>
                    </select>
                </div>

                <div className='mt-2 flex flex-col-2 justify-between'>
                  <div className='w-[49%]'>
                    <label htmlFor="units" className="block text-sm text-gray-700">Semester</label>
                    <select
                      id="semester"
                      name="semester"
                      defaultValue="1"
                      //value={semester} try dropdown
                      //onChange={ev => setSemester(ev.target.value)}
                      className="w-full rounded-md border-0 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 type=text" 
                    >
                      <option value="first">First</option>
                      <option value="second">Second</option>
                      <option value="midyear">Midyear</option>
                    </select>
                  </div>
                  <div className='w-[49%]'>
                    <label htmlFor="units" className="block text-sm text-gray-700">Units</label>
                    <select
                      id="units"
                      name="units"
                      defaultValue="1" // Set the default selected value to "1"
                      // onChange={ev => setUnits(ev.target.value)} // Uncomment this if you want to handle changes with React
                      className="w-full rounded-md border-0 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                  </div>
                </div>

                <div className='flex flex-col-2 justify-between'>
                  <div className='w-[49%]'>
                    <label htmlFor="year" className="block text-sm text-gray-700">Year Level</label>
                    <select
                      id="year"
                      name="year"
                      defaultValue="1"
                      //value={year} try dropdown
                      //onChange={ev => setYear(ev.target.value)}
                      className="w-full rounded-md border-0 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 type=text" 
                    >
                      <option value="1">First</option>
                      <option value="2">Second</option>
                      <option value="3">Third</option>
                      <option value="4">Fourth</option>
                    </select>
                  </div>
                  <div className='w-[49%]'>
                    <label htmlFor="section" className="block text-sm text-gray-700">Section</label>
                    <input
                      id="Section"
                      name="Section"
                      type="text"
                      maxLength={1}
                      placeholder='Section'
                      //value={section}
                      //force to uppercase
                      //onChange={ev => setSection(ev.target.value)}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 type=text" 
                    />
                  </div>
                </div>

                

                <div className='mt-10 grid grid-row-2 justify-center'>
                    <button className="bg-[#0FE810] rounded-2xl mt-5 px-5 text-white font-size">
                         Add Class
                    </button>

                    <button onClick={closeModal} className="bg-[#E2202C] rounded-2xl mt-3 px-5 text-white font-size">
                         Cancel
                    </button>
                </div>
            </form> 
        </div>
    </>
  )
}
