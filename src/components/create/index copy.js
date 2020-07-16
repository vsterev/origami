import React from 'react'
import styles from './create.module.css'
import Post from '../shared/post'
class Create extends React.Component {
    state = {
        origamis: []
    }

    getCreate(n) {
        fetch(`http://localhost:9999/api/origami${n ? `/${n}` : ``}`)
            .then(res => res.json())
            .then(origamis => this.setState({ origamis }))
            .catch(err => console.log(err))
    }
    componentDidMount() {
        this.getCreate(3)
    }
    renderOrigami() {
        return this.state.origamis.map(
            (origam, id) => <Post key={id} description={origam.description} author={origam.author.username} />
        )
    }
    render() {
        console.log(this.state.origamis)
        return (
            // <div>
            <div className={styles.Input}>
                <h1>{this.props.title}</h1>
                <div>
                    <textarea></textarea>
                    <button>Post</button>
                </div>
                <div>
                    <h2>Last 3 post on your wall</h2>
                    {this.renderOrigami()}
                </div>

            </div>
            // </div>

        )
    }
}

export default Create