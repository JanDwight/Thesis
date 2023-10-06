import React from 'react'
import { useState } from 'react';
import { Menu } from '@headlessui/react';
import ArchivePost from './ArchivePost';

export default function PostEllipse() {
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

  return (
    <>
    <div>
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

    <ArchivePost 
    showArchivepost={showArchivepost}
    onclose={() => setShowArchivepost(false)}
    onSubmitarchive={onSubmitarchive}
    />

    </>
  )
}
