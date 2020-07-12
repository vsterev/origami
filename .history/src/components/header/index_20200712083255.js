import React from 'react'
import './styles.css'
import Link from '../link'

function Header() {
    return (
        <nav className="Navigation">
            <Link to="23">Going to 1</Link>
            <Link to="22">Going to 2</Link>
            <Link to="22">Going to 3</Link>     
        </nav>
    )
}
export default Header