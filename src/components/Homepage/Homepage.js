import { Component } from 'react'
import { Link } from 'react-router-dom'

import './Homepage.scss'

class Homepage extends Component {
    render() {
        return (
            <>
                <section className="home">
                    <h1>Hi! I'm Luca!</h1>
                    <h2>and I'm a Web Developer!</h2>
                    <Link className="about" to='/about'><p>let me tell you something about me</p></Link>
                </section>
            </>
        )
    }
}

export default Homepage

