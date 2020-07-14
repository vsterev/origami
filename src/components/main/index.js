import React from 'react'
import './styles.css'
import Menu from '../menu'
import Posts from '../posts'
const Main = () => {
    return (
        <div className="Container">
            <Menu />
            <main className="Main">
                <h1>Sooooome Heading</h1>
                <Posts />
            </main>
        </div>
    )
}
export default Main