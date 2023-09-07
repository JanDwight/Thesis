import React from 'react'
import AddPost from '../views_components/AddPost';
import PostArticles from '../views_components/PostArticles';
import SampleArticle from '../views_components/SampleArticle';


export default function Home() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center ml-10">
          <div className="w-full">
            <AddPost />
          </div>

          <div className='pt-10'>
            <PostArticles />         
          </div>
        </div>
    </div>
  )
}
