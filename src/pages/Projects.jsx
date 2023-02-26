import React from 'react'
import GetProjects from '../components/Projects/GetProjects'
import { projects } from '../../content/projects.json';
const Projects = () => {

    return (
        <div>
            <h3 className='text-center md:text-left'>Total Project: <span className='font-bold text-[#07C5D1]'>{projects.length}</span></h3>
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