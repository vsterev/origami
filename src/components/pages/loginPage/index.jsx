import React from 'react'
import PageLayout from '../shared/pageLayout'
import Login from '../../login'
export default function loginPage() {
    return (
        <React.Fragment>
            <PageLayout><Login title="Login page" /></PageLayout>
        </React.Fragment>
    )
}