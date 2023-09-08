import React from 'react';


export default function AddLinks({closeModal}) { 

  return (
    <>
    <div className='flex justify-center font-bold text-4xl text-[#525252] mt-5'>Add Link</div>
    <div>
      <form action="">
        <div className='mt-10 flex flex-col-2 justify-between'>
          <input
              id="classCode"
              name="classCode"
              type="text"
              placeholder='Class Code'
              //value={classCode}
              //onChange={ev => setClassCode(ev.target.value)}
              className="block w-full rounded-md border-0 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 type=text" 
          />         
        </div>
        <div className='mt-5'>
          <textarea
            id="classDescription"
            name="classDescription"
            type="text"
            placeholder='Class Description'
            //value={classDescription}
            //onChange={ev => setClassDescription(ev.target.value)}
            className="block w-full rounded-md border-0 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 type=text" 
          />
        </div>
        <div className='mt-5'>
          <input
            id="classInstructor"
            name="classInstructor"
            type="text"
            placeholder='Instructor'
            //value={classInstructor}
            //onChange={ev => setClassInstructor(ev.target.value)}
            className="block w-full rounded-md border-0 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 type=text" 
          />
        </div><div className='mt-5'>
          <input
            id="classLink"
            name="classLink"
            type="text"
            placeholder='Link'
            //value={classLink}
            //onChange={ev => setClassLink(ev.target.value)}
            className="block w-full rounded-md border-0 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 type=text" 
          />
        </div>

        <div className='mt-10 grid grid-row-2 justify-center'>
            <button className="bg-[#0FE810] rounded-2xl mt-5 px-5 text-white font-size">
                Add Link
            </button>

            <button onClick={closeModal} className="bg-[#E2202C] rounded-2xl mt-3 px-5 text-white font-size">
                Cancel
            </button>
        </div>
      </form>
    </div>
    </>
  
  );
}
