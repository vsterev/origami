import React from 'react'
import PageLayout from '../shared/pageLayout'
import Register from '../../register'
export default function registerPage(props) {
    return (
        <React.Fragment>
            <PageLayout><Register title="Register page" /></PageLayout>
        </React.Fragment>
    )
}