import React from 'react'
import styles from './header.module.css'
import Link from '../shared/link'
import logo from '../../images/white-origami-bird.png'
export default function Header() {
    return (
        <nav className={styles.Navigation}>
            <ul>
                <Link to="/" type="nav"><img id="logo" src={logo} alt="logo" /></Link>
                <Link to="/home" type="nav">Home</Link>
                <Link to="/" type="nav">Posts</Link>
                <Link to="/create" type="nav">Create Post</Link>
                <Link to="/login" type="nav">Login</Link>
                <Link to="/register" type="nav">Register</Link>
                <Link to="/profile" type="nav">Profile</Link>
            </ul>
        </nav>
    )
}