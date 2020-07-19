import React from 'react'
import styles from './post.module.css'
const Post = ({ id, description, author }) => {
    return (
        <div className={styles.Post} >
            <img src="blue-origami-bird.png" alt="origami" />
            <p className={styles.description}>
                <span>{id+1} - </span>
                {description}
            </p>
            <div>
                <span>
                    <small>Author:</small>
                    {author}
                </span>
            </div>
        </div>
    )
}
export default Post