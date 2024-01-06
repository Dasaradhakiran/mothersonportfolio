import {Link} from "react-router-dom"

import "./index.css"

const Header = () => (
    <nav className="header-cont">
        <h3 className="header-text">Dasaradha Kiran</h3>
        <ul className="header-ul-elem">
            <li className="header-li-elem">
                <Link to="/" className="header-link-elem" >About</Link>
            </li>
            <li className="header-li-elem">
                <Link to="/projects" className="header-link-elem" >Projects</Link>
            </li>
            <li className="header-li-elem">
                <Link to="/contact" className="header-link-elem" >Contact</Link>
            </li>
        </ul>
    </nav>
)

export default Header