import React from 'react'
import PostProfile from './PostProfile'
import PostEllipse from './PostEllipse'
import PostDescription from './PostDescription'
import PostTitle from './PostTitle'
import PostImage from './PostImage'

export default function SamplePost() {
  return (
    <div class="px-10 my-4 py-6 bg-gray-200 rounded-2xl shadow-2xl">
        <div div class="flex justify-between items-center">
            <PostProfile />
            <PostEllipse />
        </div>
        <div class="mt-2">
            <PostTitle />
            <PostImage />
            <PostDescription />
        </div>
    </div>
  )
}
