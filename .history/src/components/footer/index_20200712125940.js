import React from 'react'
import './styles.css'
import Link from '../link'

const Footer = () => {
    return(
        <footer className="Footer">
            <ul>
                <Link to="/home">Going to 1</Link>
                <Link to="/">Going to 2</Link>
                <Link to="/new">Going to 3</Link>
            </ul>
            <p>Software Unicercity 2019 $reg;</p>
        </footer>
    )
}
export default Footer