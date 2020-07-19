import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HomePage from './components/pages/homePage'
import LoginPage from './components/pages/loginPage'
import RegisterPage from './components/pages/registerPage'
import CreatePostPage from './components/pages/createPostPage'
import ProfilePage from './components/pages/profilePage'
import ErrorPage from './components/pages/errorPage'
function Navigation() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/register" component={RegisterPage} />
                <Route path="/create" component={CreatePostPage} />
                <Route path="/profile" component={ProfilePage} />
                <Route component={ErrorPage} />
            </Switch>
        </BrowserRouter>
    )
}
export default Navigation