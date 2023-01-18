import ProjectCard from './ProjectCard';
import { projects } from '../../../content/projects.json';
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
            </div>
        </>
    )
}

export default GetProjects;