import React from 'react'
import styles from './error.module.css'
// import errorImg from '../../images/Thinking_Face_Emoji.png'
const Error = () => {
    return (
        <div className={styles.FourOFour}>
            <h1>Something went wrong...</h1>
            {/* <img src={errorImg} alt="hmmm emodji"/> */}
            <img src="Thinking_Face_Emoji.png" alt="hmmm emodji"/>
        </div>
    )
}
export default Error