import React from 'react'
import styles from './link.module.css'
import { Link as ReactRouterDomLink} from 'react-router-dom'

function Link({ children, to, type }) {
    return (
        // <li className={styles.listItem}>
        <li className={styles[`${type}ListItem`]}>
            <ReactRouterDomLink to={to}>{children }</ReactRouterDomLink>
        </li>
    )
}
export default Link;