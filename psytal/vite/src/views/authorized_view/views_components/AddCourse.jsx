import React from 'react'

export default function AddCourse({closeModal}) {
  return (
    <> 
        <div className='flex justify-center font-bold text-4xl text-[#525252]'>
        Add Course
        </div>
        <div>
            <form action="">
                <div className='mt-2 flex flex-col-2 justify-between'>
                    <input
                      id="classYear"
                      name="classYear"
                      type="text"
                      placeholder='Year'
                      //value={classYear}
                      className="block w-[48%] rounded-md border-0 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 type=text" 
                    />

                    <input
                      id="semester"
                      name="semester"
                      type="text"
                      placeholder='Semester'
                      //value={semester}
                      className="block w-[48%] rounded-md border-0 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 type=text" 
                    />
                </div>

                <div className='mt-2 flex flex-col-2 justify-between'>
                    <input
                      id="courseCode"
                      name="courseCode"
                      type="text"
                      placeholder='Course Code'
                      //value={courseCode}
                      className="block w-[50%] rounded-md border-0 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 type=text" 
                    />

                    <input
                      id="units"
                      name="units"
                      type="text"
                      placeholder='Units'
                      //value={units}
                      className="block w-[40%] rounded-md border-0 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 type=text" 
                    />
                </div>

                <div className='mt-2 flex flex-col-1 justify-between'>
                    <textarea
                      id="courseTitle"
                      name="courseTitle"
                      type="text"
                      placeholder='Course Title'
                      //value={courseTitle}
                      className="block w-full h-[50%] rounded-md border-0 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 type=text" 
                    />
                </div>

                <div className='mt-2 flex flex-col-3 justify-between'>
                    <input
                      id="hoursperWeek"
                      name="hoursperWeek"
                      type="text"
                      placeholder='Hours/Week'
                      //value={hoursperWeek}
                      className="block w-[50%] rounded-md border-0 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 type=text" 
                    />

                    <input
                      id="lec"
                      name="lec"
                      type="text" //change to radio
                      placeholder='Lec'
                      //value={lec}
                      className="block w-[20%] rounded-md border-0 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 type=text" 
                    />

                    <input
                      id="lab"
                      name="lab"
                      type="text" //change to radio
                      placeholder='Lab'
                      //value={lab}
                      className="block w-[20%] rounded-md border-0 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 type=text" 
                    />
                </div>

                <div className='mt-2 flex flex-col-2 justify-between'>
                    <input
                      id="preReq"
                      name="preReq"
                      type="text"
                      placeholder='Pre Requisite'
                      //value={preReq}
                      className="block w-[48%] rounded-md border-0 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 type=text" 
                    />

                    <input
                      id="grade"
                      name="grade"
                      type="text"
                      placeholder='Grade'
                      //value={grade}
                      className="block w-[48%] rounded-md border-0 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 type=text" 
                    />
                </div>

                <div className='grid grid-row-2 justify-center'>
                    <button className="bg-[#0FE810] rounded-2xl mt-3 px-5 text-white font-size">
                         Add Course
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
