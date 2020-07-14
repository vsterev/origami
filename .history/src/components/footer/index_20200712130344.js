import React from 'react'
import './styles.css'
import Link from '../link'
import logo from '../../images/blue-origami-bird-flipped.png'

const Footer = () => {
    return (
        <footer className="Footer">
            <ul>
                <Link to="/"><img id="logo" src={logo} alt="logo" /></Link>
                <Link to="/home">Going to 1</Link>
                <Link to="/">Going to 2</Link>
                <Link to="/new">Going to 3</Link>
            </ul>
            <p>Software Univercity 2019 &#169;</p>
        </footer>
    )
}
export default Footer