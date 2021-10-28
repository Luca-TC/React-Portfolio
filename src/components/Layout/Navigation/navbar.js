import { useState } from "react"
import { NavLink } from "react-router-dom"

import "./navbar.scss"
import bars from "../../bars-solid.svg"

const Navbar = (props) => {

    const [toggleState, setToggleState] = useState(false)

    const toggle = () => {
        setToggleState(toggleState === false ? true : false)
    }



    return (
        <nav>
            <ul className={`collapsed ${toggleState ? "is-expanded" : ""}`}>
                <NavLink className="navlink" to="/" onClick={toggle} >
                    <li>home</li>
                </NavLink>
                <NavLink className="navlink" to="/about" onClick={toggle}>
                    <li>about Me</li>
                </NavLink>
                <NavLink className="navlink" to="/projects" onClick={toggle}>
                    <li>projects</li>
                </NavLink>
                <NavLink className="navlink" to="/contact" onClick={toggle}>
                    <li>contacts</li>
                </NavLink>
                <NavLink className="navlink" to="/blog" onClick={toggle}>
                    <li>blog</li>
                </NavLink>
            </ul>
            {toggleState ?
                <div></div>
                : <img src={bars} alt='toggle' aria-hidden="true" onClick={toggle} />}
        </nav>
    )
}
export default Navbar