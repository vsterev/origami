import React from 'react'
import './styles.css'
function Link ({children,to}){
    return (
    <ul className="listItem" href={to}>{children}</ul>
    )
}
export default Link;