import React from 'react'
import Youtube from '../../util/Youtube'
import './App.css';

class App extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            test: "hello",
            // accessToken: "",
        }

    }

    async testYoutube() {
        return await Youtube.channel()
    }

    async authorizeGoogle() {
        Youtube.authenticate(
            '/search', {
                params: {
                    q: "cool"
                }
            }
        )
    }

    render() {
        return(
            <div>
                <h1>{this.state.test}</h1>
                <button onClick={this.authorizeGoogle}></button>
            </div>
        )
    }
}



export default App;
