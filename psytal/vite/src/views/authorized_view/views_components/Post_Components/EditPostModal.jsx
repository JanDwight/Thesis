import React, { useState, useEffect } from 'react';
import axiosClient from '../../../../axios';

export default function EditPostModal({ selectedPost, closeModal, handleSave }) {
    const [editedPost, setEditedPost] = useState({ ...selectedPost });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);

    // Load the image preview when the component first mounts
    useEffect(() => {
        if (editedPost.image) {
            // Check if the image is a File (newly selected) or a URL (already saved)
            if (editedPost.image instanceof File) {
                const reader = new FileReader();
                reader.onload = () => {
                    setImagePreview(reader.result);
                };
                reader.readAsDataURL(editedPost.image);
            } else {
                setImagePreview(`http://localhost:8000/storage/${editedPost.image}`);
            }
        }
    }, [editedPost.image]);

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
        setError(null);

        try {
            const formData = new FormData();
            formData.append('title', editedPost.title);
            formData.append('description', editedPost.description);
            formData.append('image', editedPost.image);

            const response = await axiosClient.put(`/posts/${editedPost.id}`, formData);

            if (response.status === 200) {
                handleSave({
                    id: editedPost.id,
                    title: editedPost.title,
                    description: editedPost.description,
                    image: response.data.image,
                });
                closeModal();
            } else {
                throw new Error('Network response was not ok');
            }
        } catch (error) {
            console.error('Error updating data: ', error);
            setError('Error updating the post. Please try again.');
        } finally {
            setLoading(false);
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
                    </div>

                    <div className="mb-4">
                        {imagePreview && (
                            <img
                                src={imagePreview}
                                alt="Image Preview"
                                style={{ maxWidth: '100%', maxHeight: '200px' }}
                            />
                        )}
                    </div>

                    {error && <p className="text-red-500">{error}</p>}

                    <div className="text-center flex justify-end my-7">
                        <button
                            type="submit"
                            onClick={savePost}
                            className="bg-lime-600 hover-bg-lime-700 text-white font-bold py-2 px-4 rounded-full"
                            disabled={loading}
                        >
                            {loading ? 'Updating...' : 'Update'}
                        </button>
                        <button
                            onClick={closeModal}
                            className="bg-red-600 hover-bg-red-700 text-white font-bold py-2 px-4 ml-4 rounded-full"
                            disabled={loading}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
