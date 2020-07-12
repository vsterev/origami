import React from 'react'
import './styles.css'
import Link from '../link'

function Header() {
    return (
        <header className="Navigation">
            <Link to="/home">Going to 1</Link>
            <Link to="/">Going to 2</Link>
            <Link to="/ew">Going to 3</Link>     
        </header>
    )
}
export default Header