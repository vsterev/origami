import React from 'react'
import styles from './menu.module.css'
import Link from '../shared/link'
const Menu = () => {
    return (
        <aside className={styles.Aside}>
            <ul>
                <Link to="/home" type="aside">Home</Link>
                <Link to="/" type="aside">Posts</Link>
                <Link to="/create" type="aside">Create Post</Link>
                <Link to="/login" type="aside">Login</Link>
                <Link to="/register" type="aside">Register</Link>
                <Link to="/profile" type="aside">Profile</Link>
            </ul>
        </aside>
    )

}
export default Menu