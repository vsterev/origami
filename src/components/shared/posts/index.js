import React from 'react'
import styles from './posts.module.css'
import Origamis from '../origamis'
const Posts = ({ title }) => {
    return (
        <main className={styles.Main}>
            <h1>{title}</h1>
            <div className={styles.Posts}>
                <Origamis />
            </div>
        </main>
    )
}

export default Posts