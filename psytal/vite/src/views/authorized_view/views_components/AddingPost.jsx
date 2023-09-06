import React from 'react'
import { useState } from 'react';
import image from "@assets/icons8image.png";
import announcement from "@assets/Announcement.jpg"

export default function AddingPost({showPosts, title, setTitle, postmsg, setPostmsg, onClose, onSubmit}) {
    if (!showPosts) {
        return null;
      }
  return (
    <>
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-gray-200 w-full lg:w-1/2 px-4 py-6 shadow-lg rounded-3xl">
            <div className="w-full px-4 mx-auto mt-6"> 
                <form onSubmit={onSubmit}>
                    <div className="flex h-full items-center">                       
                        <img src={image} className="h-5 w-auto mt-5"/>
                        <span onClick={''} className="text-md lg:text-md mx-2 font-semibold text-gray-500 mt-5"> Attach Photo / File</span>
                    </div>
                    <div>
                        {/**TITLE */}
                        <div className="flex items-center justify-between">
                            <input 
                            id="title"
                            name="title"
                            type="text"
                            required
                            value={title}
                            onChange={ev => setTitle(ev.target.value)}
                            className="block w-1/2 rounded-3xl border-0 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:leading-6 type=text" 
                            placeholder="Title"
                            />
                        </div>

                    </div>
                    
                    {/**Attached a photo here */}
                    <div className='flex justify-center items-center py-5'>
                        <img src={announcement} alt='announcement' ></img>
                    </div>

                    {/**POST */}
                    <div className="mt-2">
                    <textarea
                        id="postmsg"
                        name="postmsg"
                        required
                        value={postmsg}
                        onChange={ev => setPostmsg(ev.target.value)}
                        className="block w-full rounded-3xl border-0 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:leading-6"
                        rows="4" // Adjust the number of rows as needed
                        placeholder="Post about..."
                    />
                    </div>

                    {/**BUTTONS */}
                    <div className="text-center flex justify-end my-7">
                        <button onClick={onClose} className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 mr-6 rounded-full">
                            Cancel
                        </button>
                        <button type="submit" className="bg-lime-600 hover:bg-lime-700 text-white font-bold py-2 px-4 rounded-full">
                            Post
                        </button>
                    </div>
                </form>
            </div>
        </div>     
    </div>
    
    </>
  )
}
