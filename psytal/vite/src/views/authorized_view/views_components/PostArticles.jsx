import React from 'react'
import { useState } from 'react';
import { Menu } from '@headlessui/react';
import { EllipsisHorizontalIcon } from '@heroicons/react/24/solid';
import image from "@assets/icons8image.png";
import announcement from "@assets/Announcement.jpg"
import axiosClient from '../../../axios.js';
import AddingPost from './AddingPost.jsx';
import ArchivePost from './ArchivePost.jsx';
import SampleArticle from './SampleArticle.jsx';


export default function PostArticles() {
    {/**---------READ MORE---------- */}
    const [isShowMore, setIsShowMore] = useState(false);
    const toggleReadMoreLess = () => {
        setIsShowMore(!isShowMore);};

    {/**---------Calling the Adding Post for it to edit hehe---------- */}
    const [showPosts, setShowPosts]=useState(false);
    const [error, setError] = useState({ __html: '' });
    const [title, setTitle] = useState('');
    const [postmsg, setPostmsg] = useState('');

    const onSubmit = async (ev) => {
        ev.preventDefault();
        setError({ __html: '' });

        try {
        const response = await axiosClient.post('/addpost', { title, postmsg});
        fetchLinks();
        setShowLinks(false);
        } catch (error) {
        if (error.response) {
            const finalErrors = Object.values(error.response.data.errors).reduce(
            (accum, next) => [...accum, ...next],
            []
            );
            setError({ __html: finalErrors.join('<br>') });
        }
        console.error(error);
        }
    };
  return (
    <>
    {/*Post article */}
    <div class="px-10 my-4 py-6 bg-gray-200 rounded-2xl shadow-2xl">
    
        <SampleArticle>
        <Menu className='placeholder:right-0 visible'>
                <Menu.Button>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>
                    <Menu.Items>
                        <div className='absolute bg-white flex flex-col p-2 origin-center'>
                            <Menu.Item>
                            {({ active }) => (
                                <a
                                    onClick={() => setShowPosts(true)}
                                    className={`${active && 'bg-[#CCEFCC]'} border-b-2 border-t-2 border-black`}
                                    >
                                    Edit
                                </a>
                            )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <a                                    
                                        className={`${active && 'bg-[#CCEFCC]'} border-b-2 border-black`}
                                        >
                                        Archive
                                    </a>
                                )}
                            </Menu.Item>
                        </div>
                    </Menu.Items>
                    
                </Menu.Button>
                
            </Menu>
        </SampleArticle>
        
    </div>

    <AddingPost 
    showPosts={showPosts}
    onClose={() => setShowPosts(false)}
    onSubmit={onSubmit}
    title={title}
    setTitle={setTitle}
    postmsg={postmsg}
    setPostmsg={setPostmsg}
    />

    <ArchivePost 
    
    />
    </>
  )
}
