import { blogs } from "/content/blogs.json";
import { motion } from 'framer-motion';
const BlogCard = () => {
    return (
        <motion.div
            initial={{
                opacity: 0,
                x: 0,
                y: 50,
                scale: 0.9,
                rotate: 0
            }}
            animate={{
                opacity: 1,
                x: 0,
                y: 0,
                scale: 1,
                rotate: 0,
            }}
            transition={{
                duration: .8,
                delay: 0.2,
                ease: [.5, 0.71, .7, 1.2]
            }} className='grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10 bg-transparent'>
            {
                blogs.map(blog => (

                    <div className='backdrop-blur-[5px] bg-white/5 shadow-[#851EED]/30 shadow-md p-4 rounded-lg h-auto sm:h-[440px]'>
                        <div className=' h-[150px] sm:h-[200px] w-full md:h-[50%] overflow-hidden rounded-lg'>
                            <img className='w-full object-cover skeleton' src={blog.thumbnail} alt="" />
                        </div>
                        <div className="bg-transparent">
                            <h2 className='text-lg text-[#07C5D1] mt-5 mb-2 '>{blog.title}</h2>
                            <p className='text-sm text-[#b274f0]'>
                                {
                                    blog.content.length > 120
                                    &&
                                    blog.content.slice(0, 120) + "..."
                                }
                            </p>
                        </div>
                        <div className="bg-transparent flex gap-5 mt-4">
                            <button className='bg-[#07C5D1]/20 backdrop-blur-[5px] px-5 py-1 rounded-full text-[#07C5D1]'>
                                <a href={blog.url} target="_blank">Read</a>
                            </button>
                            <button className='bg-[#851EED]/20 backdrop-blur-[5px] px-5 py-1 rounded-full text-[#851EED]'>
                                <a href={blog.url}>Share</a>
                            </button>
                        </div>
                    </div>
                ))
            }
        </motion.div>
    )
}

export default BlogCard