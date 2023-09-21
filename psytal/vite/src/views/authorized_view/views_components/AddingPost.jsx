import React, { useState } from 'react';
import axios from 'axios';
import image from "@assets/icons8image.png";

export default function AddingPost({ showPosts, onClose }) {
  // Initialize state variables
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imagePreviews, setImagePreviews] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleImageChange = (event) => {
    const files = event.target.files;
    const previews = [];
    const selected = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();

      reader.onload = (e) => {
        previews.push(e.target.result);
        selected.push(file);
        if (previews.length === files.length) {
          setImagePreviews(previews);
          setSelectedImages(selected);
        }
      };

      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Send the post data using axios (you need to implement this)
      const postData = {
        title,
        description,
        images: selectedImages,
      };

      // Example axios post request, replace with your actual API endpoint
      await axios.post('/api/post', postData);

      // Reset form fields and previews
      setTitle('');
      setDescription('');
      setImagePreviews([]);
      setSelectedImages([]);
      setLoading(false);
    } catch (error) {
      console.error('Error creating post:', error);
      setLoading(false);
    }
  };

  
  if (!showPosts) {
    return null;
  }

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full overflow-y-auto bg-black bg-opacity-50">
        <div className="lg:w-1/2 px-4 py-1 shadow-lg w-[20%] h-fit bg-[#FFFFFF] rounded-xl mt-[10%] mx-auto p-5">
          <div className="w-full px-4 mx-auto mt-6">
            <form onSubmit={handleSubmit}>
              {/* Attach Photo / File */}
              <div className="rounded-md bg-transparent p-3 w-30 h-30">
                <label htmlFor="upload" className="flex flex-row items-center gap-2 cursor-pointer">
                  <img src={image} className="h-8 w-auto mt-5" alt="Upload Icon" />
                  <span className="text-md lg:text-md mx-2 font-semibold text-green-800 mt-5">Attach Photo / File</span>
                </label>
                <input id="upload" type="file" className="hidden" multiple onChange={handleImageChange} />
              </div>

              {/* Title Input */}
              <div className="flex items-center justify-between mt-4">
                <input
                  id="title"
                  name="title"
                  type="text"
                  value={title}
                  onChange={(ev) => setTitle(ev.target.value)}
                  className="block w-1/2 rounded-xl border-1 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:leading-6"
                  placeholder="Title"
                />
              </div>

              {/* Image Previews */}
              {imagePreviews.length > 0 && (
                <div className="mt-4 grid grid-cols-2 gap-2">
                  {imagePreviews.map((preview, index) => (
                    <div key={index} className="max-w-full">
                      <img src={preview} alt={`Preview ${index}`} className="max-w-full h-auto rounded-lg" />
                    </div>
                  ))}
                </div>
              )}

              {/* Description Textarea */}
              <div className="mt-4">
                <textarea
                  id="description"
                  name="description"
                  value={description}
                  onChange={(ev) => setDescription(ev.target.value)}
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
