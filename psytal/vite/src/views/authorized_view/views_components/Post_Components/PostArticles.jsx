import React from 'react'
import { useState } from 'react';
import { Menu } from '@headlessui/react';
import { EllipsisHorizontalIcon } from '@heroicons/react/24/solid';
import announcement from "@assets/Announcement.jpg"
import axiosClient from '../../../../axios.js';
import AddingPost from '../AddingPost.jsx';
import ArchivePost from './ArchivePost.jsx';


export default function PostArticles() {
    {/**---------READ MORE---------- */}
    const [isShowMore, setIsShowMore] = useState(false);
    const toggleReadMoreLess = () => {
        setIsShowMore(!isShowMore);};
    
    {/**---------Calling the ArchivePost--------- */}
    const [showArchivepost, setShowArchivepost] = useState(false);
    const [errors, setErrors] = useState({ __html: '' });
    const onSubmitarchive = async (ev) => {
        ev.preventDefault();
        setError({ __html: '' });

        try {
        const response = await axiosClient.post('/archivepost', { });
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

    {/**---------Calling the AddingPost for it to edit hehe---------- */}
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
    <div className="px-10 my-4 py-6 bg-gray-200 rounded-2xl shadow-2xl">
        <div className="flex justify-between items-center">
            <div>
                <a className="flex items-center" href="#">
                    <img className="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block" src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=373&q=80" alt="avatar"/>
                    <div>
                    <h1 className="text-gray-700 font-bold">Khatab wedaa</h1>
                    <p className="font-light text-gray-600">mar 10, 2019</p>
                    </div>
                    
                </a>
                
            </div>
            
            <Menu>
                <Menu.Button>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
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
                                        onClick={() => setShowArchivepost(true)}                                 
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
            
            
        </div>
        
        <div className="mt-2" onClick={toggleReadMoreLess}>
            {/**Title of the post */}
            <a className="text-2xl text-gray-700 font-bold hover:text-gray-600">Announcement: No Classess</a>
            {/**Attached a photo here */}
            <div className='flex justify-center items-center py-5'>
                <img src={announcement} alt='announcement' height={150} width={150} ></img>
            </div>
            {/**BODY - Description of the post */}
            <p className="mt-2" >Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Tempora expedita dicta totam aspernatur doloremque. 
            Excepturi iste iusto eos enim reprehenderit nisi, 
            accusamus delectus nihil quis facere in modi ratione libero!
            {isShowMore && (
                <span>
                Sapiente exercitationem odio quia, animi eos distinctio tempora, ipsum
                hic vitae modi eum nostrum id perspiciatis impedit dolores.Sapiente exercitationem odio quia, animi eos distinctio tempora, ipsum
                hic vitae modi eum nostrum id perspiciatis impedit dolores.Sapiente exercitationem odio quia, animi eos distinctio tempora, ipsum
                hic vitae modi eum nostrum id perspiciatis impedit dolores.Sapiente exercitationem odio quia, animi eos distinctio tempora, ipsum
                hic vitae modi eum nostrum id perspiciatis impedit dolores.
                </span>
            )}
            </p>
            
        </div>
        <div className="flex justify-between items-center mt-4">
            <a className="text-blue-600 hover:underline" onClick={toggleReadMoreLess}>{isShowMore ? "Read Less" : "Read More"}</a>
        </div>
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
    showArchivepost={showArchivepost}
    onclose={() => setShowArchivepost(false)}
    onSubmitarchive={onSubmitarchive}
    />
    </>
  )
}

