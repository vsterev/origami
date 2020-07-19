import React from 'react'
import styles from './profile.module.css'
import Origamis from '../shared/origamis'
const Profile = () => {
    return (
        <div className={styles.Profile}>
            <img src="Thinking_Face_Emoji.png" alt="user_photo" />
            <div className={styles['personal-info']}>
                <p>
                    <span>Email :</span>
            someone@hotmail.com
                </p>
                <p>
                    <span>Posts :</span>
            9
        </p>
            </div>
            <div>
                <h2>3 of your recent posts</h2>
                <Origamis limit="3" />
            </div>
        </div>
    )
}
export default Profile