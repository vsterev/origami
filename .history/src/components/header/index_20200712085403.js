import React from 'react'
import './styles.css'
import Link from '../link'

function Header() {
    return (
        <nav className="Navigation">
            <Link to="/"><img src="../../images/blue-origami-bird-flipped.png" /></Link>
            <Link to="/home">Going to 1</Link>
            <Link to="/">Going to 2</Link>
            <Link to="/new">Going to 3</Link>     
        </nav>
    )
}
export default Header