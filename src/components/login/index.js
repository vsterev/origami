import React from 'react'
import styles from '../../components/register/register.module.css'
import Post from '../shared/post'
class Login extends React.Component {
    state = {
        origamis: []
    }

    getLogin(n) {
        fetch(`http://localhost:9999/api/origami${n ? `/${n}` : ``}`)
            .then(res => res.json())
            .then(origamis => this.setState({ origamis }))
            .catch(err => console.log(err))
    }
    componentDidMount() {
        this.getLogin()
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
            <div className={styles.Login}>
                <h1>{this.props.title}</h1>
                <form>
                    <div className={styles['form-control']}>
                        <label>Email</label>
                        <input type="email" />
                    </div>
                    <div className={styles['form-control']}>
                        <label>Password</label>
                        <input type="password" />
                    </div>
                    <div className={styles['form-control']}>
                        <button type="submit">Login</button>
                    </div>
                </form>
            </div>
            // </div>

        )
    }
}

export default Login