import React from 'react'
import styles from './menu.module.css'
import Link from '../shared/link'
import getNavigations from '../utils/navLinks'
const Menu = () => {
    return (
        <aside className={styles.Aside}>
            <ul>
                {getNavigations().map((link, ind) => {
               return <Link key={ind} to={link.path} type="aside">{link.title}</Link>
            }
            )}
                {/* <Link to="/home" type="aside">Home</Link>
                <Link to="/" type="aside">Posts</Link>
                <Link to="/create" type="aside">Create Post</Link>
                <Link to="/login" type="aside">Login</Link>
                <Link to="/register" type="aside">Register</Link>
                <Link to="/profile" type="aside">Profile</Link> */}
            </ul>
        </aside>
    )

}
export default Menu