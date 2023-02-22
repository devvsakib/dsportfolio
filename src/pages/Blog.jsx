import BlogCard from '../components/Blog/BlogCard'

const Blog = () => {
    return (
        <div>
             {/*circle div */}
            <div>
                <div className="circle -z-99999 "></div>
                <div className="circle -z-99999 c2"></div>
                <div className="circle -z-99999 c3"></div>
            </div>
            <BlogCard />
        </div>
    )
}

export default Blog