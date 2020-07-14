import React from 'react'
import styles from './link.module.css'
function Link({ children, to, type }) {
    return (
        // <li className={styles.listItem}>
        <li className={styles[`${type}ListItem`]}>
            <a href={to}>{children }</a>
        </li>
    )
}
export default Link;