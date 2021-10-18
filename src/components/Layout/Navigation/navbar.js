import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import "./navbar.css"

const Navbar = (props) => {

    const [toggleState, setToggleState] = useState(false)

    const toggle = () => {
        setToggleState(toggleState === false ? true : false)
    }



    return (
        <nav>
            <i className="fa fa-bars" aria-hidden="true" onClick={toggle} />
            <ul className={`collapsed ${toggleState ? "is-expanded" : ""}`}>
                <NavLink activeClassName="active" onClick={toggle} to="/">
                    <li>home</li>
                </NavLink>
                <NavLink activeClassName="active" to="/about" onClick={toggle}>
                    <li>about Me</li>
                </NavLink>
                <NavLink activeClassName="active" to="/contact" onClick={toggle}>
                    <li>contact</li>
                </NavLink>
            </ul>
        </nav>
    )
}
export default Navbar