import React from 'react';
import Post from '../post'

class Origami extends React.Component {
    state = {
        origamis: []
    }
    getOrigamis(n) {
        fetch(`http://localhost:9999/api/origami${n ? `/${+n}` : ``}`)
            .then(res => res.json())
            .then(origamis => this.setState({ origamis }))
            .catch(err => console.log(err))
    }
    componentDidMount(){
        this.getOrigamis(this.props.limit)
    }
    renderOrigami(){
        return this.state.origamis.map(
            (origam,id) => <Post key={id} id={id} description={origam.description} author={origam.author.username} />
        )
    }
    render() {
        return (
            <React.Fragment>
                {this.renderOrigami()}
            </React.Fragment>
        )
    }
}
export default Origami