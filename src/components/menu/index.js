import React from 'react'
import styles from './menu.module.css'
import Link from '../link'
const Menu = () => {
    return (
        <aside className={styles.Aside}>
            <ul>
                <Link to="/home" type="aside">Going to 1</Link>
                <Link to="/" type="aside">Going to 2</Link>
                <Link to="/new" type="aside">Going to 3</Link>
            </ul>
        </aside>
    )

}
export default Menu