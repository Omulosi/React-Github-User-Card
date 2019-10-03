import React, { Component } from 'react';
import lambdalogo from './assets/lambdalogo.png';
import githublogo from './assets/githublogo.png';
import './App.css';
import axios from 'axios';

import GithubCard from './components/GithubCard';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      username: 'Omulosi',
      followers: []
    };
    this.GITHUB_API = 'https://api.github.com/users/';
  }

  componentDidMount() {
    const githubLink = `${this.GITHUB_API}Omulosi`;

    axios.get(githubLink)
      .then(response => response.data)
      .then(data => {
        this.setState({...this.state, data: data})
        axios.get(data.followers_url)
          .then(response => response.data)
          .then(data => {
            this.setState({...this.state, followers: data});
          })
          .catch(error => {
            console.log(error);
          })
      })
      .catch(error => {
        console.log(error);
      })

  }

  render() {
    return (
      <div className="container">
        <div className="header">
          <img src={lambdalogo} alt="Lambda Logo"/>
          <p>❤️'s</p>
          <img src={githublogo} alt="GitHub Logo" />
        </div>
        <div className="cards">
          <GithubCard data={this.state.data} />
          <p className="follower-title">Followers</p>
          {this.state.followers.map((follower, id) => {
            return <GithubCard data={follower} key={id}/>
          })}
        </div>

      </div>
    )
  }
}

export default App;
