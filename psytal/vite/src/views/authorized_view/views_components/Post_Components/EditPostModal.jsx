import React, { useState } from 'react';
import axiosClient from '../../../../axios';

export default function EditPostModal({ selectedPost, closeModal, handleSave }) {
    if (!selectedPost) {
        return null;
    }

    const [editedPost, setEditedPost] = useState(selectedPost);
    const [loading, setLoading] = useState(false);

    const handleImageChange = (ev) => {
        const file = ev.target.files[0];
        if (file) {
            setEditedPost({
                ...editedPost,
                image: file,
            });
        }
    };

    const savePost = async () => {
        setLoading(true);
        const formData = new FormData();
        formData.append('title', editedPost.title);
        formData.append('description', editedPost.description);

        // Check if there's a new image to upload
        if (editedPost.image instanceof File) {
            formData.append('image', editedPost.image);
        }

        try {
            const response = await axiosClient.put(`/posts/${editedPost.id}`, formData);
            if (response.status === 200) {
                // Trigger the handleSave function from the parent component
                handleSave({
                    id: editedPost.id,
                    title: editedPost.title,
                    description: editedPost.description,
                    image: response.data.image, // Update with the response image path
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
                    <h2 className="text-center text-xl font-semibold my-3">Edit Post</h2>

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
                        <input type="file" accept="image/*" onChange={handleImageChange} />
                        {editedPost.image && (
                            <img
                                src={`http://localhost:8000/storage/${editedPost.image}`}
                                alt="Image Preview"
                                style={{ maxWidth: '100%', maxHeight: '200px' }}
                            />
                        )}
                    </div>

                    <div className="text-center flex justify-end my-7">
                        <button
                            type="submit"
                            onClick={savePost}
                            className="bg-lime-600 hover:bg-lime-700 text-white font-bold py-2 px-4 rounded-full"
                        >
                            {loading ? 'Updating...' : 'Update'}
                        </button>
                        <button
                            onClick={closeModal}
                            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 ml-4 rounded-full"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
