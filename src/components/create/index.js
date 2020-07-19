import React from 'react'
import styles from './create.module.css'
import Origamis from '../shared/origamis'
const Create = ({title}) => {

    return (
        <div className={styles.Input}>
            <h1>{title}</h1>
            <div>
                <textarea></textarea>
                <button>Post</button>
            </div>
            <div>
                <h2>Last 3 post on your wall</h2>
                <Origamis limit="3"/>
            </div>

        </div>
    )
}

export default Create