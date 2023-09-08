import React from 'react'
import announcement from "@assets/Announcement.jpg"

export default function PostImage() {
  return (
    <>
        {/**Attached a photo here */}
        <div className='flex justify-center items-center py-5'>
            <img src={announcement} alt='announcement' height={150} width={150} ></img>
        </div>
    </>
  )
}
