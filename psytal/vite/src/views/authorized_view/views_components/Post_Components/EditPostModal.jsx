import React, { useState } from 'react';
import axiosClient from '../../../../axios';

export default function EditPostModal({ selectedPost, closeModal, handleSave }) {
  if (!selectedPost) return null;

  const [loading, setLoading] = useState(false);
  const [editedPost, setEditedPost] = useState({
    ...selectedPost,
    selectedImages: selectedPost.images.map(() => null),
  });

  const handleImageChange = (ev, index) => {
    const selectedImage = ev.target.files[0];

    setEditedPost((prevState) => {
      const updatedSelectedImages = [...prevState.selectedImages];
      updatedSelectedImages[index] = selectedImage;

      const updatedImages = [...prevState.images];
      updatedImages[index] = { file: selectedImage };

      return {
        ...prevState,
        images: updatedImages,
        selectedImages: updatedSelectedImages,
      };
    });
  };

  const removeImage = (index) => {
    setEditedPost((prevState) => {
      const updatedImages = [...prevState.images];
      updatedImages.splice(index, 1);
      const updatedSelectedImages = [...prevState.selectedImages];
      updatedSelectedImages.splice(index, 1);

      return {
        ...prevState,
        images: updatedImages,
        selectedImages: updatedSelectedImages,
      };
    });
  };

  const updateImage = (index) => {
    document.getElementById(`image${index + 1}`).click();
  };

  const savePost = async () => {
    setLoading(true);
  
    if (!editedPost.title || !editedPost.description) {
      console.error('Title and description are required.');
      setLoading(false);
      return;
    }
  
    const formData = new FormData();
    formData.append('title', editedPost.title);
    formData.append('description', editedPost.description);
  
    editedPost.images.forEach((image, index) => {
      if (image.file) {
        formData.append(`images[${index}]`, image.file);
      } else if (image.image_id) {
        formData.append(`existingImages[${index}]`, image.image_id);
      }
    });
  
    try {
      const response = await axiosClient.put(`/posts/${editedPost.id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Add this header
        },
      });
      if (response.status === 200) {
        handleSave({
          id: editedPost.id,
          title: editedPost.title,
          description: editedPost.description,
          images: response.data.post.images,
        });
      } else {
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      console.error('Error updating data: ', error);
    } finally {
      setLoading(false);
      closeModal();
    }
  };
  
  
  



  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-y-auto bg-black bg-opacity-50">
      <div className="lg:w-1/2 px-4 py-1 shadow-lg w-[20%] h-fit bg-[#FFFFFF] rounded-xl mt-[10%] mx-auto p-5">
        <div className="w-full px-4 mx-auto mt-6">
          <h2 className="text-center text-3xl font-semibold my-3">Edit Post</h2>

          <div className="mb-4">
            <input
              id="editedTitle"
              name="editedTitle"
              type="text"
              value={editedPost.title}
              onChange={(ev) => setEditedPost({ ...editedPost, title: ev.target.value })}
              className="block w-full rounded-xl border-1 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:leading-6"
              placeholder="Title"
            />
          </div>

          <div className="mb-4">
            <textarea
              id="editedDescription"
              name="editedDescription"
              value={editedPost.description}
              onChange={(ev) => setEditedPost({ ...editedPost, description: ev.target.value })}
              className="block w-full rounded-xl border-1 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:leading-6"
              rows="4"
              placeholder="Edit post ..."
            />
          </div>

          <div className="mb-4">
            <div className="flex space-x-4">
              {editedPost.images.map((image, index) => (
                <div key={index} className="relative overflow-hidden rounded-xl w-48 h-48">
                  {/* Make each photo clickable */}
                  <label htmlFor={`image${index + 1}`} className="cursor-pointer">
                    {/* Display existing images */}
                    {image.image_path && (
                      <>
                        <img
                          src={`http://localhost:8000/storage/${image.image_path}`}
                          alt={`Image ${index + 1}`}
                          className="object-cover w-full h-full"
                        />
                        <button
                          onClick={() => removeImage(index)}
                          className="absolute top-0 right-0 p-2 bg-red-500 text-white rounded-full"
                        >
                          X
                        </button>
                      </>
                    )}
                    {/* Display selected images for editing */}
                    {editedPost.selectedImages && editedPost.selectedImages[index] && (
                      <>
                        <img
                          src={URL.createObjectURL(editedPost.selectedImages[index])}
                          alt={`Selected Image ${index}`}
                          className="object-cover w-full h-full"
                        />
                        <button
                          onClick={() => removeImage(index)}
                          className="absolute top-0 right-0 p-2 bg-red-500 text-white rounded-full"
                        >
                          X
                        </button>
                      </>
                    )}
                    {/* Hide the default file input */}
                    <input
                      id={`image${index + 1}`}
                      type="file"
                      accept="image/*"
                      onChange={(ev) => handleImageChange(ev, index)}
                      className="hidden"
                    />
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center flex justify-end my-7">
            <button
              type="button"
              onClick={savePost}
              className="bg-lime-600 hover:bg-lime-700 text-white font-bold py-2 px-4 rounded-full"
            >
              {loading ? 'Updating...' : 'Update'}
            </button>
            <button
              onClick={closeModal}
              className="bg-red-600 hover-bg-red-700 text-white font-bold py-2 px-4 ml-4 rounded-full"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
