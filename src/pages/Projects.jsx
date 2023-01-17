import React from 'react'
import GetProjects from '../components/Projects/GetProjects.jsx'
import ProjectCard from '../components/Projects/ProjectCard.jsx'
const Projects = () => {
    return (

        <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 py-5 gap-10'>
            <GetProjects />
        </section>
    )
}

export default Projects