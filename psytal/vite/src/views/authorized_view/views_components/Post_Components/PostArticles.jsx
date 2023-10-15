import React, { useState, useEffect } from 'react';
import avatar from "@assets/icons8avatar.png";
import axiosClient from '../../../../axios'; 
import EditPostModal from './EditPostModal';
import ArchivePost from './ArchivePost'; 

export default function PostArticles() {
    const [posts, setPosts] = useState([]);
    const [showMenu, setShowMenu] = useState(null);
    const [editModalOpen, setEditModalOpen] = useState(false); 
    const [selectedPost, setSelectedPost] = useState(null); 
    const [archiveConfirmation, setArchiveConfirmation] = useState(false); // State for the confirmation modal

    useEffect(() => {
        // Define a function to fetch posts
        const fetchPosts = async () => {
            try {
                const response = await axiosClient.get('/posts');
                if (response.status === 200) {
                    setPosts(response.data);
                } else {
                    throw new Error('Network response was not ok');
                }
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };

        fetchPosts();
    }, []);

    const toggleMenu = (index) => {
        setShowMenu(showMenu === index ? null : index);
    };

    const openEditModal = (post) => {
        setSelectedPost(post);
        setEditModalOpen(true);
    };

    const handleArchive = (post) => {
        setSelectedPost(post);
        setArchiveConfirmation(true);
    };

    const confirmArchive = async () => {
        try {
           
            const response = await axiosClient.post(`/archivePost/${selectedPost.id}`);
            if (response.status === 200) {
                // Post archived successfully, remove it from the list
                const updatedPosts = posts.filter((post) => post.id !== selectedPost.id);
                setPosts(updatedPosts);
            } else {
                throw new Error('Network response was not ok');
            }
        } catch (error) {
            console.error('Error archiving the post: ', error);
        } finally {
          
            setArchiveConfirmation(false);
        }
    };

    return (
        <div>
            {posts.map((post, index) => (
                <div key={post.id} className="px-10 my-4 py-6 bg-gray-200">
                    {/* Ellipsis Menu */}
                    <div
                        className="relative"
                        onClick={() => toggleMenu(index)}
                    >
                        <div
                            className="absolute top-5 right-5 w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center cursor-pointer"
                        >
                            <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                            <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                            <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                        </div>
                        {showMenu === index && (
                            <div className="menu-dropdown absolute top-10 right-2 bg-gray-300 p-2 rounded-md shadow-md">
                                <div
                                    className="cursor-pointer hover:bg-green-200 hover:w-full" 
                                    onClick={() => openEditModal(post)}
                                >
                                    Edit
                                </div>
                                <div
                                    className="cursor-pointer hover:bg-green-200 hover:w-full" 
                                    onClick={() => handleArchive(post.id)}
                                >
                                    Archive
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Profile section */}
                    <div className="flex justify-between items-center">
                        <div>
                            <a className="flex items-center" href="#">
                                <img
                                    className="mx-4 w-10 h-10 object-cover rounded-full hidden sm-block"
                                    src={avatar}
                                    alt="avatar"
                                />
                                <div>
                                    <h1 className="text-gray-700 font-bold">{post.author?.name || 'Author Name'}</h1>
                                    <p className="font-light text-gray-600">{post.created_at}</p>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Description section */}
                    <div className="mt-2">
                        <a className="text-2xl text-gray-700 font-bold hover:text-gray-600">
                            {post.title}
                        </a>
                        <div className="flex justify-center items-center py-5">
                            {post.image && (
                                <img
                                    src={`http://localhost:8000/storage/${post.image}`}
                                    alt="announcement"
                                    height={700}
                                    width={700}
                                />
                            )}
                        </div>
                        <div className="content">
                            <ReadMore maxCharacterCount={200}>{post.description}</ReadMore>
                        </div>
                    </div>
                </div>
            ))}

            {editModalOpen && selectedPost && (
                <EditPostModal
                    selectedPost={selectedPost}
                    closeModal={() => setEditModalOpen(false)}
                    handleSave={handleSave}
                />
            )}

            {archiveConfirmation && (
                <ArchivePost
                    showArchivepost={archiveConfirmation}
                    onClose={() => setArchiveConfirmation(false)}
                    onSubmitArchive={confirmArchive}
                />
            )}
        </div>
    );
}

function ReadMore({ children, maxCharacterCount = 200 }) {
    const text = children;
    const [isTruncated, setIsTruncated] = useState(true);
    const resultString = isTruncated ? text.slice(0, maxCharacterCount) : text;

    function toggleIsTruncated() {
        setIsTruncated(!isTruncated);
    }

    return (
        <p>
            {resultString}
            <a onClick={toggleIsTruncated}>
                {isTruncated ? 'Read More' : 'Read Less'}
            </a>
        </p>
    );
}
