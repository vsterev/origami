import React from 'react'
import PageLayout from '../pageLayout'
import Publications from '../../shared/posts'
const HomePage = () => {
    return (
        <React.Fragment>
            <PageLayout><Publications title="Publications" /></PageLayout>
        </React.Fragment>
    )
}
export default HomePage