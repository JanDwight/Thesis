import React from 'react'
import { useState } from 'react';
import axiosClient from '../../../axios.js';
import AddingPost from './AddingPost.jsx';
import image from "@assets/icons8image.png";
import create from "@assets/icons8createpost.png";

export default function AddPost() {
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
  {/*Create Post*/}
  <div className="bg-gray-200 w-full h-34 rounded-full shadow-xl">

    <div className="w-full h-24 flex items-center justify-between px-5">
      <input onClick={() => setShowPosts(true)} type="text" className="w-full rounded-full h-8 bg-white px-6 py-0 border-none focus:ring-green-700 text-xs m-5" placeholder="Create Post . . ." />
      
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

    </>

  )
}
