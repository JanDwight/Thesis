import React from 'react'
import { useState } from 'react';
import { Menu } from '@headlessui/react';
import { EllipsisHorizontalIcon } from '@heroicons/react/24/solid';
import image from "@assets/icons8image.png";
import announcement from "@assets/Announcement.jpg"
import axiosClient from '../../../axios.js';
import AddingPost from './AddingPost.jsx';
import ArchivePost from './ArchivePost.jsx';

export default function SampleArticle() {
    {/**---------READ MORE---------- */}
    const [isShowMore, setIsShowMore] = useState(false);
    const toggleReadMoreLess = () => {
        setIsShowMore(!isShowMore);};

    
  return (
    <>
    {/*===============WHOLE Post article =======================*/}
    <div class="px-10 my-4 py-6 bg-gray-200 ">
        {/** ________________Profile to Ellipsis__________________ */}
        <div class="flex justify-between items-center">
            {/**---------Profile (w/ Name & Date)------ */}
            <div>
                <a class="flex items-center" href="#">
                    <img class="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block" src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=373&q=80" alt="avatar"/>
                    <div>
                    <h1 class="text-gray-700 font-bold">Khatab wedaa</h1>
                    <p class="font-light text-gray-600">mar 10, 2019</p>
                    </div>
                    
                </a>
                
            </div>
            
            
            
        </div>

        {/**___________WHOLE DESCRIPTION OF THE POST_________________ */}
        <div class="mt-2" onClick={toggleReadMoreLess}>
            {/**Title of the post */}
            <a class="text-2xl text-gray-700 font-bold hover:text-gray-600">Announcement: No Classess</a>
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
        <div class="flex justify-between items-center mt-4">
            <a class="text-blue-600 hover:underline" onClick={toggleReadMoreLess}>{isShowMore ? "Read Less" : "Read More"}</a>
        </div>
    </div>

    

    <ArchivePost 
    
    />
    </>
  )
}
