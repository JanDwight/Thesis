import React from 'react'

export default function ArchiveCourse({showArchivecourse, onclose, onSubmitarchivecourse}) {
    if (!showArchivecourse) {
        return null;
    }
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-gray-200 w-full lg:w-3/12 px-4 py-6 shadow-lg rounded-3xl">
            <div className="w-full px-4 mx-auto">
                <form onSubmitarchivecourse={onSubmitarchivecourse}>
                <h className='font-bold text-3xl text-[#525252] flex items-center justify-center pb-5'>Archive Course?</h>
                    {/**BUTTONS */}
                    <div className="text-center flex justify-end my-2">
                        {/**YES */}
                        <button type="submit" className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 mr-6 w-full rounded-full">
                            Yes
                        </button>
                        {/**NO */}
                        <button onClick={onclose} type="submit" className="bg-lime-600 hover:bg-lime-700 text-white font-bold py-2 px-4 w-full rounded-full">
                            No
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
