import React, { Component } from 'react';

class JokeApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            joke: 'THIS will be a joke',
            isLoading: false,
        }
    }

    _fetchJoke = () => {
        this.setState({
            isLoading: true,
        }, () => {
            const url = 'https://api.chucknorris.io/jokes/random?category=dev'
            fetch(url)
            .then(response => response.json())
            .then(jokeJson => {
                this.setState({
                    joke: jokeJson.value
                }, () => {
                    console.log('New joke stored');
                });
            });
        })
    }

    render() {
        return(
            <div>
                <p>{this.state.isLoading ? 'Loading...' : this.state.joke}</p>
                <button onClick={this._fetchJoke}>Get New Joke</button>
            </div>
        )
    }
}

export default JokeApp;