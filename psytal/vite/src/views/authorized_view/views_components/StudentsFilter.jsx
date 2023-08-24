import React from 'react'

export default function StudentsFilter({ showModal, onClose, fullName, setFullName, onSubmit }) {
    if (!showModal) {
      return null;
    }
  return (
    <div className="w-1/3">
   <label className=" text-gray-700 text-sm mb-2" htmlFor="Year">Year Level</label>
            <select className="block w-full rounded-md border-0 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:leading-6" id="accounttype">
                          <option>1st</option>
                          <option>2nd</option>
                          <option>3rd</option>
                          <option>4th</option>
                        </select>
    </div>
  )
}
