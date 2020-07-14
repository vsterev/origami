import React from 'react'
import './styles.css'
function Link({ children, to }) {
    return (
        <li className="listItem">
            <a href={to}>{children}</a>
        </li>
    )
}
export default Link;