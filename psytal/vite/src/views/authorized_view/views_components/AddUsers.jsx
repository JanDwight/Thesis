import React from 'react'

export default function AddUsers({closeModal}) {
  return (
    <>
    <div className='flex justify-center font-bold text-4xl text-[#525252]'>
        Add User?
    </div>
    <div>
      <form action="">
        <div className='mt-10 flex flex-col-2 justify-between'>
          <input 
            id="fullname"
            name="fullname"
            type="text"
            placeholder='Full Name'
            //value={fullName}
            //onChange={ev => setfullname(ev.target.value)}
            className="block w-full rounded-md border-0 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 type=text" 
          />       
        </div>
        <div className='mt-5'>
          <input 
            id="email"
            name="email"
            type="text"
            placeholder='Email'
            //value={email}
            //onChange={ev => setEmail(ev.target.value)}
            className="block w-full rounded-md border-0 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 type=text" 
          />
        </div>

        <div className='mt-10 font-bold text-xl'>
          Role:
        </div>

        <div className='mt-5 grid md:grid-cols-1 lg:grid-cols-2 gap-4'>
          <button className='bg-[#7EBA7E] rounded-lg h-8'>Admin</button>
          <button className='bg-[#7EBA7E] rounded-lg h-8'>Staff</button>
          <button className='bg-[#7EBA7E] rounded-lg h-8'>Instructors</button>
          <button className='bg-[#7EBA7E] rounded-lg h-8'>Student</button>
        </div>

        <div className='grid grid-row-2 justify-center'>
            <button className="bg-[#0FE810] rounded-2xl mt-3 px-5 text-white font-size">
                Add User
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
