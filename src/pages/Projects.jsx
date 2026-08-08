import React from 'react'
import GetProjects from '../components/Projects/GetProjects'
import { projects } from '../../content/projects.json';
const Projects = () => {

    return (
        <div>
            <section className='grid z-999 mb-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 py-5 gap-10 bg-gradient-to-r px-0'>
                <div className="circle -z-99999 "></div>
                <div className="circle -z-99999 c2"></div>
                <div className="circle -z-99999 c3"></div>
                <GetProjects />

            </section>
        </div>
    )
}

export default Projects