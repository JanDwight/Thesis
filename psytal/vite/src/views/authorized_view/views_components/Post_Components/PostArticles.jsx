import React, { useState, useEffect } from 'react';
import avatar from "@assets/icons8avatar.png";
import axiosClient from '../../../../axios';

export default function PostArticles() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axiosClient.get('/posts')
            .then((response) => {
                if (response.status === 200) {
                    setPosts(response.data);
                } else {
                    throw new Error('Network response was not ok');
                }
            })
            .catch((error) => console.error('Error fetching data: ', error));
    }, []);

    return (
        <div>
            {posts.map((post) => (
                <div key={post.id} className="px-10 my-4 py-6 bg-gray-200">
                    {/* Profile section */}
                    <div className="flex justify-between items-center">
                        <div>
                            <a className="flex items-center" href="#">
                                <img
                                    className="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block"
                                    src={avatar}
                                    alt="avatar"
                                />
                                <div>
                                    <h1 className="text-gray-700 font-bold">{post.author_name?.name || 'Author Name'}</h1>
                                    <p className="font-light text-gray-600">{post.created_at}</p>
                                </div>
                            </a>
                        </div>
                    </div>
                    {/* Description section */}
                    <div className="mt-2">
                        <a className="text-2xl text-gray-700 font-bold hover-text-gray-600">
                            {post.title}
                        </a>
                        <div className="flex justify-center items-center py-5">
                        {post.image && (
                            
                            <img
                            src={`/storage/${post.image}`}
                                alt="announcement"
                                height={200}
                                width={200}
                            />
                        )}

                        </div>
                        <div className="content">
                            <ReadMore maxCharacterCount={150}>{post.description}</ReadMore>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

function ReadMore({ children, maxCharacterCount = 100 }) {
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
