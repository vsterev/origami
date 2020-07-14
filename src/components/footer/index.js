import React from 'react'
import styles from './footer.module.css'
import Link from '../shared/link'
import logo from '../../images/blue-origami-bird-flipped.png'

const Footer = () => {
    return (
        <footer className={styles.Footer}>
            <ul>
                <Link to="/home" type="footer">Going to 1</Link>
                <Link to="/" type="footer">Going to 2</Link>
                <Link to="/new" type="footer">Going to 3</Link>
                <Link to="/" type="footer"><img id="logo" src={logo} alt="logo" /></Link>
            </ul>
            <p>Software Univercity 2019 &#169;</p>
        </footer>
    )
}
export default Footer