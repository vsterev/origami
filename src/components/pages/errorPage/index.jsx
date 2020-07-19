import React from 'react'
import PageNoMenuLayout from '../shared/pageNoMenuLayout'
import Error from '../../error'
export default function errorPage() {
    return (
        <React.Fragment>
            <PageNoMenuLayout><Error /></PageNoMenuLayout>
        </React.Fragment>
    )
}