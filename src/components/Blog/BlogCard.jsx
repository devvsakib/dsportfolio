import React from 'react'
import { blogs } from "/content/blogs.json";
const BlogCard = () => {
    return (
        <div className='grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10'>
            {
                blogs.map(blog => (

                        <div className='backdrop-blur-[5px] bg-white/5 shadow-[#851EED]/30 shadow-md p-4 rounded-lg'>
                            <div className='h-[300px] overflow-hidden rounded-lg'>
                                <img className='w-full h-full object-cover object-top' src={blog.thumbnail} alt="" />
                            </div>
                            <div className="bg-transparent">
                                <h2 className='text-xl text-[#07C5D1] mt-5 mb-2 '>{blog.title}</h2>
                                <p className='text-sm text-[#b274f0]'>{blog.content}</p>
                            </div>
                            <div className="bg-transparent flex gap-5 mt-4">
                                <button className='bg-[#07C5D1]/20 backdrop-blur-[5px] px-5 py-1 rounded-full text-[#07C5D1]'>
                                    <a href={blog.url}>Read</a>
                                </button>
                                <button className='bg-[#851EED]/20 backdrop-blur-[5px] px-5 py-1 rounded-full text-[#851EED]'>
                                    <a href={blog.url}>Share</a>
                                </button>
                            </div>
                        </div>
                ))
            }
        </div>
    )
}

export default BlogCard