import React from 'react'

export default function AddClass({closeModal}) {
  return (
    <>
        <div className='flex justify-center font-bold text-4xl text-[#525252] mt-5'>
        Add Class
        </div>
        <div>
            <form action="">
                <div className='mt-10 flex flex-col-2 justify-between'>
                    <input
                      id="courseCode"
                      name="courseCode"
                      type="text"
                      placeholder='Course Code'
                      //value={courseCode}
                      //onChange={ev => setCourseCode(ev.target.value)}
                      className="block w-[48%] rounded-md border-0 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 type=text" 
                    />

                    <input
                      id="yearSection"
                      name="yearSection"
                      type="text"
                      placeholder='Year/Section'
                      //value={yearSection}
                      //onChange={ev => setYearSection(ev.target.value)}
                      className="block w-[50%] rounded-md border-0 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 type=text" 
                    />
                </div>

                <div className='mt-10'>
                    <input
                      id="instructor"
                      name="instrtuctor"
                      type="text"
                      placeholder='Instructor'
                      //value={instructor}
                      //onChange={ev => setInstructor(ev.target.value)}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 type=text" 
                    />

                    <textarea
                      id="description"
                      name="description"
                      type="text"
                      placeholder='Description'
                      //value={yearSection}
                      //onChange={ev => setYearSection(ev.target.value)}
                      className="block mt-5 w-full h-[50%] rounded-md border-0 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 type=text" 
                    />
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
