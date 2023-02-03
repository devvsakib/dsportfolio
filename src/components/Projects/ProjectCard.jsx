import { motion } from 'framer-motion';
const ProjectCard = ({ project }) => {
    // console.log(project);

    return (
        <motion.div
            initial={{
                opacity: 0,
                x: 0,
                y: 50,
                scale: 1,
                rotate: 1,
            }}
            animate={{
                opacity: 1,
                x: 0,
                y: 0,
                scale: 1,
                rotate: 0,
            }}
            transition={{
                duration: 0.5,
                delay: 0.2,
                ease: [0, 0.71, 0.2, 1.01]
            }}
            className="project-card w-[100%] p-3 z-10 rounded-md bg-[#AD30FA]/20 shadow-md backdrop-blur-md backdrop-brightness-100 drop-shadow-2xl shadow-[#AD30FA]/40">
            <div className="grid grid-flow-col gap-2 items-center project-card__image rounded-md bg-transparent overflow-hidden">
                {/* vertical stack icon */}
                
                <div className={`grid w-auto bg-transparent  gap-4  justify-start  my-2`}>
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
                <img src={project.thumb} alt="" srcSet="" className="object-fit object-cover object-center" />
            </div>
            <div className="project-card__content bg-transparent">
                <h2 className="text-2xl mt-3">{project.title}</h2>
                <p className="text-sm">{project.description}</p>
                {/* horizontal stack icon */}
                {/* <div className={`grid grid-flow-col gap-4 justify-start  my-2 bg-transparent w-auto `}>
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
                </div> */}
                <div className="bg-transparent">
                    <motion.button
                        whileTap={{ scale: 0.6 }}

                        href="#" className="project-card__link p-2 mb-0">Live</motion.button>
                    <motion.button
                        whileTap={{ scale: 0.6 }}

                        href="#" className="project-card__link p-2 mb-0">Code</motion.button>
                </div>
            </div>
        </motion.div>
    )
}
export default ProjectCard;