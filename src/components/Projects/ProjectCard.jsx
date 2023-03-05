import { useState, useEffect } from 'react'
import { motion } from 'framer-motion';
import './styles/style.css'
import { useContext } from 'react';
import { ThemeContext } from '../../context/themeContext';

const ProjectCard = ({ project }) => {
    const { theme } = useContext(ThemeContext);
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
            }}
            className="project-card w-[100%] p-3 z-10 rounded-md bg-[#AD30FA]/20 shadow-md backdrop-blur-md backdrop-brightness-100 drop-shadow-2xl shadow-[#AD30FA]/40">
            <div className="z-99999 grid grid-flow-col gap-2 rounded-md bg-transparent overflow-hidden z-10 items-start">
                {/* vertical stack icon */}
                <div className={`hidden md:block bg-transparent`}>
                    <div className='grid w-auto bg-transparent gap-4  justify-start  my-2'>
                        {
                            project.stack.map((tech, idx) => (
                                <motion.img
                                    whileHover={{ scale: 1.5 }}
                                    key={idx}
                                    src={tech} srcSet=''
                                    className='w-6 cursor-pointer' />
                                // <motion.span
                                // initial={{
                                //     opacity: 0,
                                //     x: 0,
                                //     y: 50,
                                //     scale: 1,
                                //     rotate: 1,
                                // }}
                                // animate={{
                                //     opacity: 1,
                                //     x: 0,
                                //     y: 0,
                                //     scale: 1,
                                //     rotate: 0,
                                // }}
                                // whileHover={{ scale: 1.2 }}
                                // key={idx} className=" bg-[#07C5D1] text-[#01041E] cursor-pointer px-2 w-auto rounded text-sm"> {tech}</motion.span>
                            ))
                        }
                    </div>
                </div>
                <img src={project.thumb} alt="" srcSet="" className="object-fit skeleton object-cover object-center thumbnail" />
            </div>
            <div className="project-card__content bg-transparent">
                <h2 className="text-2xl mt-3 text-white projectTitle uppercase font-semibold">{project.title}</h2>
                <p className={`text-sm ${!theme ? "" : "text-black"}`}>{project.description}</p>
                {/* horizontal stack icon */}
                <div className={`block md:hidden grid grid-flow-col gap-4 justify-start  my-2 bg-transparent w-auto `}>
                    {
                        project.stack.map((tech, idx) => (
                            <motion.img
                                whileHover={{ scale: 1.5 }}
                                key={idx}
                                src={tech} srcSet=''
                                className='w-6 cursor-pointer' />
                            // <motion.span
                            // initial={{
                            //     opacity: 0,
                            //     x: 0,
                            //     y: 50,
                            //     scale: 1,
                            //     rotate: 1,
                            // }}
                            // animate={{
                            //     opacity: 1,
                            //     x: 0,
                            //     y: 0,
                            //     scale: 1,
                            //     rotate: 0,
                            // }}
                            // whileHover={{ scale: 1.2 }}
                            // key={idx} className=" bg-[#07C5D1] text-[#01041E] cursor-pointer px-2 w-auto rounded text-sm"> {tech}</motion.span>
                        ))
                    }
                </div>
                <div className="bg-transparent">
                    <motion.button
                        whileTap={{ scale: 0.8 }}
                        whileHover={{ scale: 1.1 }}
                        className={`liveBTN ${!theme ? "text-white" : "text-black"} pl-0 p-2 mb-0"`}><a href={project.live_link} target="_blank" >
                            Live</a></motion.button>
                    <motion.button
                        whileTap={{ scale: 0.8 }}
                        whileHover={{ scale: 1.1 }}
                        className={`codeBTN ${!theme ? "text-white" : "text-black"} p-2 mb-0"`}><a href={project.source_code} target="_blank" >
                            Code</a></motion.button>
                </div>
            </div>
        </motion.div>
    )
}
export default ProjectCard;