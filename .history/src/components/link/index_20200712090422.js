import React from 'react'
import './styles.css'
function Link ({children,to}){
    return (
    <li className="listItem" href={to}>{children}</li>
    )
}
export default Link;