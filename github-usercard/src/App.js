import React, { Component } from 'react';
import lambdalogo from './assets/lambdalogo.png';
import githublogo from './assets/githublogo.png';
import './App.css';

import GithubCard from './components/GithubCard';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
    this.GITHUB_API = 'https://api.github.com/users/';
  }

  componentDidMount() {
    const githubLink = `${this.GITHUB_API}Omulosi`;

    axios.get(githubLink)
      .then(response => response.data)
      .then(data => {
        this.setState({data: data})
      })
      .catch(error => {
        console.log(error);
      })
  }

  render() {
    return (
      <div class="container">
        <div class="header">
          <img src={lambdalogo} alt="Lambda Logo"/>
          <p>❤️'s</p>
          <img src={githublogo} alt="GitHub Logo" />
        </div>
        <div class="cards">
          <GithubCard data={this.state.data} />
        </div>

      </div>
    )
  }
}

export default App;
