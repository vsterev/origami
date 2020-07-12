import React from 'react'
import './styles.css'
function Link({ children, to }) {
    return (
        <li>
            <a className="listItem" href={to}>{children}</a>
        </li>
    )
}
export default Link;