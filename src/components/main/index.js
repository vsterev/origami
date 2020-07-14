import React from 'react'
import styles from './main.module.css'
import Menu from '../menu'
import Posts from '../posts'
const Main = () => {
    return (
        <div className={styles.Container}>
            <Menu />
            <main className={styles.Main}>
                <h1>Sooooome Heading</h1>
                <Posts />
            </main>
        </div>
    )
}
export default Main