import React from 'react'
import AddPost from '../views_components/AddPost';
import PostArticles from '../views_components/Post_Components/PostArticles';
import PostDescription from '../views_components/Post_Components/PostDescription';
import SamplePost from '../views_components/Post_Components/SamplePost';


export default function Home() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center ml-10">
          <div className="w-full">
            <AddPost />
          </div>

          <div className='pt-10'>
            <PostArticles />  
            <SamplePost />       
          </div>
        </div>
    </div>
  )
}
