import React from 'react'
import './styles.css'
function Link ({children,text}){
    return (
    <ul className="listItem" a href="#">{children}{}</ul>
    )
}
export default Link;