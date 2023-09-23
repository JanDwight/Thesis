import React, { useState } from 'react';
import axiosClient from '../../../axios';
import image from "@assets/icons8image.png";

export default function AddingPost({ showPosts, onClose }) {
 
  const [error, setError] = useState({__html: ""});
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);

  const onSubmit = async (ev) => {
    ev.preventDefault();
    setError({ __html: "" });
    setLoading(true);

    try {
      const response = await axiosClient
      .post('/createposts', {
        title: title,
        description: description,
      });

      // Handle success, e.g., show a success message or redirect
      console.log(response.data);
    } catch (error) {
      // Handle errors, e.g., display error message
      console.error(error.response.data);
      setError('An error occurred while posting.');
    } finally {
      setLoading(false);
    }
  };

  if (!showPosts) {
    return null;
  }

  return (
    <>
    
    {error.__html && (
        <div className='bg-red-500 rounded py-2 px-2 text-white'
          dangerouslySetInnerHTML={error}>
        </div>)}


      <div className="fixed top-0 left-0 w-full h-full overflow-y-auto bg-black bg-opacity-50">
        <div className="lg:w-1/2 px-4 py-1 shadow-lg w-[20%] h-fit bg-[#FFFFFF] rounded-xl mt-[10%] mx-auto p-5">
          <div className="w-full px-4 mx-auto mt-6">
          <form onSubmit={onSubmit} action="#" method="POST">
              {/* Attach Photo / File */}
              <div className="rounded-md bg-transparent p-3 w-30 h-30">
                <label htmlFor="upload" className="flex flex-row items-center gap-2 cursor-pointer">
                  <img src={image} className="h-8 w-auto mt-5" alt="Upload Icon" />
                  <span className="text-md lg:text-md mx-2 font-semibold text-green-800 mt-5">Attach Photo / File</span>
                </label>
                <input id="upload" type="file" className="hidden"/>
              </div>

              {/* Title Input */}
              <div className="flex items-center justify-between mt-4">
                <input
                  id="title"
                  name="title"
                  type="text"
                  value={title}
                  onChange={(ev) => setTitle(ev.target.value )}
                  className="block w-1/2 rounded-xl border-1 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:leading-6"
                  placeholder="Title"
                />
              </div>


              {/* Description Textarea */}
              <div className="mt-4">
                <textarea
                  id="description"
                  name="description"
                  value={description}
                  onChange={(ev) => setDescription(ev.target.value )}
                  className="block w-full rounded-xl border-1 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:leading-6"
                  rows="4"
                  placeholder="Write post ..."
                />
              </div>

              {/* Buttons */}
              <div className="text-center flex justify-end my-7">
                <button onClick={onClose} className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 mr-6 rounded-full">
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-lime-600 hover:bg-lime-700 text-white font-bold py-2 px-4 rounded-full"
                  disabled={loading}
                >
                  {loading ? 'Posting...' : 'Post'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
