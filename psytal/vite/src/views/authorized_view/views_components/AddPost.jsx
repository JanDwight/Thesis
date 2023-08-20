import React from 'react'
import image from "@assets/icons8image.png";
import create from "@assets/icons8createpost.png";

export default function AddPost() {
  return (
    <>
        {/*Create Post*/}
  <div className="bg-gray-200 w-full h-34 rounded-md shadow-md">
    <div className="w-full h-10 flex justify-between px-3 md:px-10 lg:px-24 xl:px-5">
      <div className="flex h-full items-center">
        <img src={create} className="h-5 w-auto mt-2"/>
        <span className="text-xs lg:text-md mx-2 font-semibold text-gray-500 mt-2">Create Announcement </span>
        <img src={image} className="h-6 w-auto mt-2"/>
        <span className="text-xs lg:text-md mx-2 font-semibold text-gray-500 mt-2"> Attach Photo / File</span>
      </div>
    </div>
      <div className="w-full h-16 flex items-center justify-between px-5">
        <input type="text" className="w-full rounded-full h-8 bg-white px-6 py-0 border-none focus:ring-green-700 text-xs m-5" placeholder="Type Post . . ." />
      </div>
      <div className="flex items-center justify-end md:px-10 pb-2">
          <button className="bg-neonGreen hover:bg-lime-500 h-6 text-white font-bold px-3 rounded-full">Post</button>
      </div>
    </div>  
    </>
  )
}
