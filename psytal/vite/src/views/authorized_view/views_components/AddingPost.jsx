import React, { useState } from 'react';
import axiosClient from '../../../axios';
import image from "@assets/icons8image.png";

export default function AddingPost() {
  const [error, setError] = useState({ __html: "" });
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedImages, setSelectedImages] = useState([]); // Store the selected images
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState(null);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSuccessMessage(null);
  };

  const resetFormAndOpenModal = () => {
    setError({ __html: "" });
    setTitle('');
    setDescription('');
    setSelectedImages([]); // Reset selected images
    setSuccessMessage(null);
    openModal();
  };

  // Function to handle image upload and preview
  const handleImageUpload = (event) => {
    const files = event.target.files;
    // Ensure a maximum of three images are selected
    if (selectedImages.length + files.length <= 3 || selectedImages.length === 0) {
      setSelectedImages([...selectedImages, ...files]); // Add selected images to the array
    } else {
      setError('You can select up to three images or leave it empty.');
    }
  };

  const onSubmit = async (ev) => {
    ev.preventDefault();
    setError({ __html: "" });
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('description', description);

      // Append selected images to the form data
      selectedImages.forEach((image) => {
        formData.append('images[]', image);
      });

      // Make a POST request to create a post
      
      const response = await axiosClient.post('/createposts', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log(response.data);

      // Handle success
      setTitle('');
      setDescription('');
      closeModal();

      setSuccessMessage({
        message: 'Post was successful!',
      });

      setTimeout(() => {
        setSuccessMessage(null);
        closeModal();
      }, 2000);
    } catch (error) {
      console.error(error);

      // Handle errors
      setError('An error occurred while posting.');
    } finally {
      setLoading(false);
    }
  }


  return (
    <>
      {/* Create Post */}
      <div
        className="bg-gray-200 w-full h-34 rounded-2xl shadow-xl cursor-pointer"
        onClick={resetFormAndOpenModal}
      >
        <div className="w-full h-24 flex items-center justify_between px-5">
          <input
            type="text"
            className="w-full rounded-full h-8 bg-white px-6 py-0 border-none focus:ring-green-700 text-xs m-5"
            placeholder="Create Post . . ."
          />
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full overflow-y-auto bg-black bg-opacity-50">
          <div className="lg:w-1/2 px-4 py-1 shadow-lg w-[20%] h-fit bg-[#FFFFFF] rounded-xl mt-[10%] mx-auto p-5">
            <div className="w-full px-4 mx-auto mt-6">
              <form onSubmit={onSubmit} action="#" method="POST">
                {/* Attach Photo / File */}
                <div className="rounded-md bg-transparent p-3 w-30 h-30">
                  <label htmlFor="upload" className="flex flex-row items-center gap-2 cursor-pointer">
                    <img src={image} className="h-8 w-auto mt-5" alt="Upload Icon" />
                    <span className="text-md lg-text-md mx-2 font-semibold text-green-800 mt-5">Attach Photo / File</span>
                  </label>
                  <input
                    id="upload"
                    type="file"
                    name="images"
                    accept="image/*" // Limit to image files
                    multiple
                    onChange={handleImageUpload} // Call the image upload function
                    className="hidden"
                  />
                </div>
                {selectedImages && selectedImages.length > 0 && (
                  <div className="flex flex-wrap">  
                    {selectedImages.map((image, index) => (
                      <img
                        key={index}
                        src={URL.createObjectURL(image)}
                        alt={`Selected Image ${index}`}
                        className="h-25 w-25 mx-2"
                      />
                    ))}
                  </div>
                )}

                {/* Title Input */}
                <div className="flex items-center justify-between mt-4">
                  <input
                    id="title"
                    name="title"
                    type="text"
                    value={title}
                    onChange={(ev) => setTitle(ev.target.value)}
                    className="block w-1/2 rounded-xl border-1 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:leading-6"
                    placeholder="Title"
                  />
                </div>

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
                <div className="text-center flex justify-end my-7">
                  <button
                    type="submit"
                    className="bg-lime-600 hover-bg-lime-700 text-white font-bold py-2 px-4 rounded-full"
                  >
                    {loading ? 'Posting...' : 'Post'}
                  </button>
                  <button
                    onClick={closeModal}
                    className="bg-red-600 hover-bg-red-700 text-white font-bold py-2 px-4 ml-4 rounded-full"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
      {successMessage && (
        <div className="fixed top-0 left-0 w-full h-full overflow-y-auto bg-black bg-opacity-50">
          <div className="lg:w-1/2 px-4 py-1 shadow-lg w-[20%] h-fit bg-[#FFFFFF] rounded-xl mt-[10%] mx-auto p-5">
            <div className="w-full px-4 mx-auto mt-6">
              <div className="text-center text-green-600 font-semibold my-3">
                {successMessage.message}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
