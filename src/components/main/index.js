import React from 'react'
import styles from './main.module.css'
import Menu from '../menu'
import Posts from '../shared/posts'
import Create from '../create'
import Register from '../register'
import Login from '../login'
import Profile from '../profile'
import Error from '../error'

import { Switch, Route, Redirect } from 'react-router-dom'
const Main = ({ title }) => {
    return (
        <div className={styles.Container}>
            <Menu />
            {/* <main className={styles.Main}> */}
            <Switch>
                <Route path="/" exact component={() => <Posts title="Publications" />} />
                <Route path="/create" component={() => <Create title="Share your thoughts" />} />
                <Route exact path="/home" render={() => (<Redirect to="/" />)} />
                <Route path="/register" component={() => <Register title="Register Page" />} />
                <Route path="/login" component={() => <Login title="Login Page" />} />
                <Route path="/profile" component={Profile} />
                <Route path="*" exact component={Error} />

            </Switch>
            {/* </main> */}
        </div>
    )
}
export default Main