import React from 'react'
import Header from '../../header'
import Menu from '../../menu'
import Footer from '../../footer'
import styles from '../../main/main.module.css'
// import Publications from '../../shared/posts'
const PageLayout = (props) => {
    return (
        <div>
            <Header />
            <div className={styles.Container}>
                <Menu />
                <main className={styles.Main}>
                    {props.children}
                </main>
            </div>
            <Footer />
        </div>
    )
}
export default PageLayout