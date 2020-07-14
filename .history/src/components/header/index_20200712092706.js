import React from 'react'
import './styles.css'
import Link from '../link'
// import logo from '../../images/white-origami-bird.png'

function Header() {
    return (
        <nav className="Navigation">
            <ul>
                <Link to="/"><img src={"../../images/white-origami-bird.png"} alt="logo" /></Link>
                <Link to="/home">Going to 1</Link>
                <Link to="/">Going to 2</Link>
                <Link to="/new">Going to 3</Link>
            </ul>
        </nav>
    )
}
export default Header