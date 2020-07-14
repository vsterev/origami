import React from 'react'
import './styles.css'
import Link from '../link'

function Header() {
    return (
        <nav className="Navigation">
            <ul>
                <Link to="/"><img src="/images/logo.svg" alt="logo" /></Link>
                <Link to="/home">Going to 1</Link>
                <Link to="/">Going to 2</Link>
                <Link to="/new">Going to 3</Link>
            </ul>
        </nav>
    )
}
export default Header