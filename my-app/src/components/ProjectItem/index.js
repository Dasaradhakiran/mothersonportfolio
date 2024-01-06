import "./index.css"

const ProjectItem = (props) => {
    const {projectDetails} = props 
    const {name, description, imageUrl, link, projectPosition} = projectDetails

    const projectPosition1 = () => (
        <>
           <div className="project-item-text-cont">
                <h2 className="project-item-name">{name}</h2>
                <p className="project-item-text">{description}</p>
                <a className="project-item-a-text" href={link} target="_blank" rel="noreferrer">View Project</a>
            </div>
            <img className="project-item-image-1" src={imageUrl} alt={name} /> 
        </>
    )

    const projectPosition2 = () => (
        <>
           <img className="project-item-image-2" src={imageUrl} alt={name} /> 
           <div className="project-item-text-cont">
                <h2 className="project-item-name">{name}</h2>
                <p className="project-item-text">{description}</p>
                <a className="project-item-a-text" href={link} target="_blank" rel="noreferrer">View Project</a>
            </div>
        </>
    )

    return(
        <li className="project-item-li-elem">
            {projectPosition ? projectPosition1() : projectPosition2()}
        </li>
    )
}

export default ProjectItem