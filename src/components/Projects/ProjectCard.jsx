const ProjectCard = ({ project }) => {
    // console.log(project);
    return (
        <div className="project-card">
            <div className="project-card__image rounded-md overflow-hidden">
                <img src={project.thumb} alt="" srcSet="" className="object-fit object-cover object-center"/>
            </div>
            <div className="project-card__content">
                <h2 className="text-2xl mt-3">{project.title}</h2>
                <p className="text-sm">{project.description}</p>
                <div className="flex gap-2 my-2">
                    {
                        project.stack.map((tech, idx) => (
                            <span key={idx} className="bg-[#07C5D1] text-[#01041E] px-3 rounded text-sm"> {tech}</span>
                        ))
                    }
                </div>
                <div className="project-card__links">
                    <a href="#" className="project-card__link">Live</a>
                    <a href="#" className="project-card__link">Code</a>
                </div>
            </div>
        </div>
    )
}
export default ProjectCard;