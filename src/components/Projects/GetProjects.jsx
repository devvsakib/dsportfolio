import ProjectCard from './ProjectCard';
import { projects } from '/content/projects.json';
const GetProjects = () => {

    return (
        <>
            {
                projects.map((project, idx) => (
                    <ProjectCard
                        key={idx}
                        project={project}
                        className="z-10"
                    />
                ))
            }
            <div className="project-bg fixed top-0 grid-flow-col left-0 grid grid-cols-4] items-center w-full -z-9 bg-transparent h-full bg-repeat"  >
                <div className='w-[23rem] md:w-[25vw] h-[23rem] md:h-[25vw] backdrop-blur-lg mx-auto rounded-full bg-[#07C5D1]/20 md:bg-[#07C5D1]/30 blur-[50px]'></div>
            </div>
        </>
    )
}

export default GetProjects;