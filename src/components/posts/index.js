import React from 'react'
import './styles.css'
import Post from '../post'
class Posts extends React.Component {
    state = {
        origamis: []
    }
    // getPosts = async () => {
    //     const origamis = await fetch('http://localhost:9999/api/origami').then(res => res.json())
    //     this.setState({ origamis })
    // }
    getPosts() {
        fetch('http://localhost:9999/api/origami')
            .then(res => res.json())
            .then(origamis => this.setState({ origamis }))
            .catch(err => console.log(err))
    }
    componentDidMount() {
        this.getPosts()
    }
    renderOrigami() {
        return this.state.origamis.map(
            (origam, id) => <Post key={id} description={origam.description} author={origam.author.username} />
        )
    }
    render() {
        console.log(this.state.origamis)
        return (
            <div className="Posts">
                {this.renderOrigami()}
            </div>
        )
    }
}

export default Posts