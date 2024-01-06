import {useNavigate} from "react-router-dom"
import "./index.css"

import Header from "../Header"

const About = (props) => {
    const navigate = useNavigate()

    const clickProject = () => {
        navigate("/projects")
    }

    const clickContact = () => {
        navigate("/contact")
    }
    
    return (
        <div>
            <Header />
            <div className="about-cont">
                <div className="about-text-cont">
                <h4 className="about-sub-head">Fullstack Developer</h4>
                <h2 className="about-head">Hello, my name is<br />Dasaradha Kiran</h2>
                <p className="about-text">I'm graduate from B.Tech in EEE from D.N.R College of Engineering and Technology.
                    I am React.js and Node.js Developer. I'm a code enthusiast that enjoys
                    experimenting with new technologies and building web apps, currently
                    learning Full stack web development. And I am strong from HTML, CSS, Bootstrap, JavaScript, Python, SQLite, Node.js and React.js.
                </p>
                <div>
                    <button className="about-button-1" type="button" onClick={clickProject}>Projects</button>
                    <button className="about-button-2" type="button">LinkedIn</button>
                    <button className="about-button-1" type="button" onClick={clickContact}>Let's talk</button>
                    <a className="about-button-2" href="https://drive.google.com/file/d/1mi1Z-G4LVviZtBsGCi545USWAJeBcs8X/view?usp=drivesdk" target="_blank" rel="noreferrer">Resume</a>
                </div>
                </div>
                <img className="about-profile-image" src="https://img.freepik.com/free-photo/3d-portrait-businessman_23-2150793877.jpg?ga=GA1.1.186816979.1704436478&semt=ais_ai_generated" alt="contact profile" />
            </div>
        </div>
    )
}

export default About