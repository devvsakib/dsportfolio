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
                    />
                ))
            }
        </>
    )
}

export default GetProjects;