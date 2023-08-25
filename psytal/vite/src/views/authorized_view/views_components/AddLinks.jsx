import React from 'react';


export default function AddLinks({ showLinks, subject, setSubject, link, setLink, description, setDescription, onClose, onSubmit }) { //Back end edit
  if (!showLinks) {
    return null;
  }

  return (
    
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white w-full lg:w-1/4 px-4 py-6 shadow-lg rounded-lg">
            <div className="w-full px-4 mx-auto mt-6">           
                <p className="block uppercase tracking-wide font-semibold text-green-800 my-3">add link</p>
            <form onSubmit={onSubmit}>
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="subject" className="block text-sm text-gray-700">
                 Subject:
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={subject}
                  onChange={ev => setSubject(ev.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 type=text" 
                />
              </div>
            </div>
            <div className="mt-2">
            <label className=" text-gray-700 text-sm mb-2" htmlFor="link">Link: </label>
            <input id="link"
                  name="link"
                  type="text"
                  required
                  value={link}
                  onChange={ev => setLink(ev.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:leading-6 type=text" placeholder="Paste URL"/>
            <div>
              </div>
              </div>

             <div className="mt-2">
              <label className="text-gray-700 text-sm mb-2" htmlFor="description">
                Description:
              </label>
              <textarea
                id="description"
                name="description"
                required
                value={description}
                onChange={ev => setDescription(ev.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:leading-6"
                rows="4" // Adjust the number of rows as needed
              />
            </div>
              <div className="text-center flex justify-end my-7">
              <button onClick={onClose} className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 mr-6 rounded-full">
                Cancel
              </button>
              <button type="submit" className="bg-lime-600 hover:bg-lime-700 text-white font-bold py-2 px-4 rounded-full">
                Add
              </button>
            </div>
            </form>
          </div>
        </div>
        </div>
       
             
    

      
      
  
  );
}
