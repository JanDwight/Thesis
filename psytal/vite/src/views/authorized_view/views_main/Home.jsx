import React from 'react'
import AddingPost from '../views_components/AddingPost';
import PostArticles from '../views_components/Post_Components/PostArticles';
export default function Home() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center ml-10">
          <div className="w-full">
            <AddingPost />
          </div>

          <div className='pt-10'>
          <PostArticles/>
          </div>
        </div>
    </div>
  )
}
