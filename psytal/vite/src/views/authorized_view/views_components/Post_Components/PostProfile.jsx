import React from 'react'

export default function PostProfile() {
  return (
    <>
        {/**---------Profile (w/ Name & Date)------ */}
        <div>
                <a className="flex items-center" href="#">
                    <img className="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block" src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=373&q=80" alt="avatar"/>
                    <div>
                    <h1 className="text-gray-700 font-bold">Khatab wedaa</h1>
                    <p className="font-light text-gray-600">mar 10, 2019</p>
                    </div>
                    
                </a>
                
            </div>
    </>
  )
}
