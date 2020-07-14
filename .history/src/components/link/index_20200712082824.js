import React from 'react'
import './styles.css'
function Link ({children,to}){
    return (
    <ul className="listItem" a href="to">{children}</ul>
    )
}
export default Link;