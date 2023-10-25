import React from 'react'
import { useStateContext } from '../../../context/ContextProvider';
import AddingPost from '../views_components/AddingPost';
import PostArticles from '../views_components/Post_Components/PostArticles';


export default function Home() {
  const {userRole} = useStateContext();

  // Check if the role is equal to 1
  if (userRole < 2) {
    return (
      <div>
        <div className="flex flex-col justify-center items-center ml-10">
          <div className="w-full">
            <AddingPost />
          </div>
        </div>
      </div>
    );
  } else {
    // Render something else when the role is not 1
    return (
      <div>
        <div className="flex flex-col justify-center items-center ml-10">
          <div className='pt-10'>
            <PostArticles />
          </div>
        </div>
      </div>
    );
  }
}
