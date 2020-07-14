import React from 'react'
import styles from './main.module.css'
import Menu from '../menu'
import Posts from '../shared/posts'
import { Switch, Route } from 'react-router-dom'
const Main = ({ title }) => {
    return (
        <div className={styles.Container}>
            <Menu />
            <main className={styles.Main}>
                <Switch>
                    <Route path="/" exact component={()=> <Posts title={title}/>} />
                    <Route path="/home" component={Posts} />

                </Switch>
            </main>
        </div>
    )
}
export default Main