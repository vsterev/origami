import React from 'react'
import Header from '../../../header'
import Footer from '../../../footer'
import styles from '../../../main/main.module.css'
// import Publications from '../../shared/posts'
const HomePage = (props) => {
    return (
        <div>
            <Header />
            <div className={styles.Container}>
                <main className={styles.Main}>
                    {props.children}
                </main>
            </div>
            <Footer />
        </div>
    )
}
export default HomePage