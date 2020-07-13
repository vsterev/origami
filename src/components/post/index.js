import React from 'react'
import './styles.css'
const Post = ({id,description,author}) => {
    return (
        <div className="Post" id={id}>
            <img src="blue-origami-bird.png" alt="origami" />
            <p className="description">
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