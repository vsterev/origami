import React from 'react'
import styles from './header.module.css'
import Link from '../link'
import logo from '../../images/white-origami-bird.png'

export default function Header() {
    return (
        <nav className={styles.Navigation}>
            <ul>
                <Link to="/" type="nav"><img id="logo" src={logo} alt="logo" /></Link>
                <Link to="/home" type="nav">Going to 1</Link>
                <Link to="/" type="nav">Going to 2</Link>
                <Link to="/new" type="nav">Going to 3</Link>
            </ul>
        </nav>
    )
}