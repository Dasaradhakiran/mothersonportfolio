import { Component } from "react"
import {v4} from "uuid"
import "./index.css"

import Header from "../Header"
import ProjectItem from "../ProjectItem"

const initialProjectsList = [
    {
        id: 1,
        name: "Jobby App",
        link: "http://kiranjobyapp.ccbp.tech/",
        description: "Developed a comprehensive job search solution, Jobby App. The app username is rahul. And Password is rahul@2021.",
        imageUrl: "https://www.simplilearn.com/ice9/free_resources_article_thumb/IT_Engineer_Salary.jpg",
        projectPosition: true,
    },
    {
        id: 2,
        name: "Tourism Website",
        link: "http://devotionaltour.ccbp.tech/",
        description: "Constructed an engaging travel platform where visitors can explore images, videos, and details about famous destinations.",
        imageUrl: "https://builtin.com/cdn-cgi/image/f=auto,quality=80,width=752,height=435/https://builtin.com/sites/www.builtin.com/files/styles/byline_image/public/2022-11/data-science-projects.jpg",
        projectPosition: false,
    },
    {
        id: 3,
        name: "Todos Application",
        link: "http://todobykiran.ccbp.tech/",
        description: "A robust task tracking system with CRUD capabilities, crafted to simplify task management.",
        imageUrl: "https://www.simplilearn.com/ice9/free_resources_article_thumb/Top_Cybersecurity_Projects.jpg",
        projectPosition: true,
    }
]

const imageUrlsList = [
    "https://www.simplilearn.com/ice9/free_resources_article_thumb/IT_Engineer_Salary.jpg",
    "https://builtin.com/cdn-cgi/image/f=auto,quality=80,width=752,height=435/https://builtin.com/sites/www.builtin.com/files/styles/byline_image/public/2022-11/data-science-projects.jpg",
    "https://www.simplilearn.com/ice9/free_resources_article_thumb/Top_Cybersecurity_Projects.jpg",
    "https://www.simplilearn.com/ice9/free_resources_article_thumb/html_css_projects.jpg",
    "https://ncube.com/wp-content/uploads/2020/02/Top-8-Software-Development-Models.jpg",
    "https://www.itarian.com/assets-new/images/project-management.png",
    "https://contentstatic.techgig.com/thumb/msid-77964118,width-1200,height-900,resizemode-4/77964118.jpg",
    "https://www.academyeurope.org/wp-content/uploads/2019/08/240_F_198469599_dqwVneJtN2fuZvnccxCJVAtFEjYahWhA.jpg",
    "https://cdn.sanity.io/images/tlr8oxjg/production/518b84c6a380351b1aeec9449cd44c2bf156bee9-1456x816.png?w=3840&q=80&fit=clip&auto=format",
    "https://bairesdev.mo.cloudinary.net/blog/2023/06/Is-Python-good-for-software-development.jpg?tx=w_3840,q_auto"
]

class Projects extends Component {
    state = {
        projectName: "", 
        projectLink: "", 
        projectDescription: "", 
        projectsList: initialProjectsList,
        errorMsg: false,
        positionProject: false,
    }

    changeName = (event) => {
        this.setState({projectName: event.target.value})
    }

    changeLink = (event) => {
        this.setState({projectLink: event.target.value})
    }

    changeDescription = (event) => {
        this.setState({projectDescription: event.target.value})
    }

    addProject = (event) => {
        event.preventDefault()
        const {projectName, projectLink, projectDescription, positionProject} = this.state
        if (projectName === "" && projectLink === "" && projectDescription === "") {
            this.setState({errorMsg: true})
        } else {
            const {projectsList} = this.state
            const num = projectsList.length % 10
            const newProject = {
                id: v4(),
                name: projectName,
                link: projectLink,
                description: projectDescription,
                imageUrl: imageUrlsList[num],
                projectPosition: positionProject,
            }
            this.setState({
                errorMsg: false,
                projectsList: [...projectsList, newProject], 
                positionProject: !positionProject,
                projectName: "",
                projectLink: "",
                projectDescription: "",
            })
        }
    }

    render() {
        const {
            projectName, 
            projectLink, 
            projectDescription, 
            projectsList,
            errorMsg,
        } = this.state 

        return (
            <div>
            <Header />
                <div className="projects-cont">
                    <form onSubmit={this.addProject} className="projects-form-elem">
                        <h2 className="project-head">Add Project</h2>
                        <label className="project-label-text" htmlFor="name">Project Name</label>
                        <input onChange={this.changeName} className="projects-form-input" type="text" id="name" value={projectName} />
                        <label className="project-label-text" htmlFor="link" >Project link</label>
                        <input onChange={this.changeLink} value={projectLink} className="projects-form-input" type="url" id="link" />
                        <label className="project-label-text" htmlFor="description">Description</label>
                        <textarea onChange={this.changeDescription} value={projectDescription} className="projects-form-textarea" cols={50} rows={8} id="description" />
                        {errorMsg && <p className="project-error">*Please fill the above all contents</p>}
                        <div className="project-button-cont">
                            <button className="project-button" type="submit" >Add</button>
                        </div>
                    </form>
                    <h1 className="project-text-head">Projects</h1>
                    <ul className="project-ul-elem">
                        {projectsList.map(eachItem => (
                            <ProjectItem key={eachItem.id} projectDetails={eachItem} />
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Projects