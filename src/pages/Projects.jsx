import React from 'react'
import GetProjects from '../components/Projects/GetProjects'
// import ProjectBG from '../components/Projects/ProjectBG'
const Projects = () => {
    
    return (
        <section className='grid z-999 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 py-5 gap-10 bg-gradient-to-r'>
            <GetProjects />
            {/* <ProjectBG /> */}
        </section>
    )
}

export default Projects