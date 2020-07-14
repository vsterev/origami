import React from 'react'
import './style.css'
import Link from '../link'
const Menu = () => {
    return (
        <aside className="Aside">
            <ul>
                <Link to="/home">Going to 1</Link>
                <Link to="/">Going to 2</Link>
                <Link to="/new">Going to 3</Link>
            </ul>
        </aside>
    )

}
export default Menu