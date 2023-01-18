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
            <div className="project-card__image rounded-md overflow-hidden">
                <img src={project.thumb} alt="" srcSet="" className="object-fit object-cover object-center" />
            </div>
            <div className="project-card__content bg-transparent">
                <h2 className="text-2xl mt-3">{project.title}</h2>
                <p className="text-sm">{project.description}</p>
                <div className={`grid grid-flow-col gap-2  my-2 bg-transparent w-auto `}>
                    {
                        project.stack.map((tech, idx) => (
                            <span key={idx} className=" bg-[#07C5D1] text-[#01041E] px-2 w-auto rounded text-sm"> {tech}</span>
                        ))
                    }
                </div>
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