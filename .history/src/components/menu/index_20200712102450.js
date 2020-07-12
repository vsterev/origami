import React from 'react'
import './style.css'
import Link from '../link'
const Menu = () => {
    <aside>
        <ul>
            <Link to="/"><img id="logo" src={logo} alt="logo" /></Link>
            <Link to="/home">Going to 1</Link>
            <Link to="/">Going to 2</Link>
            <Link to="/new">Going to 3</Link>
        </ul>
    </aside>
}
export default Menu