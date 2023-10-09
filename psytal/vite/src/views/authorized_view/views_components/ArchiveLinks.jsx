import React from 'react'
import axiosClient from '../../../axios.js';

export default function ArchiveLinks({onclose, selected}) {
    
    const onSubmitarchivelink = async (e) => { 
        e.preventDefault();
        try {
            const response = await axiosClient.put(`/archivelink/${selected.id}`);
            console.log('Link updated successfully:', response.data);
            window.location.reload();

            } catch (error) {
            console.error('Error archiving link:', error);
          }
    };


  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-gray-200 w-full lg:w-3/12 px-4 py-6 shadow-lg rounded-3xl">
            <div className="w-full px-4 mx-auto">
                <form >
                <h className='font-bold text-3xl text-[#525252] flex items-center justify-center pb-5'>Archive Link?</h>
                    {/**BUTTONS */}
                    <div className="text-center flex justify-end my-2">
                        {/**YES */}
                        
                        <button onClick={onSubmitarchivelink} type="submit" className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 mr-6 w-full rounded-full">
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
