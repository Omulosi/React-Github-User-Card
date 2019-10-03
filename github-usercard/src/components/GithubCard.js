import React, { Component } from 'react';

class GithubCard extends Component {

  render() {
    const {
      avatar_url,
      name,
      login,
      location,
      html_url,
      followers,
      following,
      bio
    } = this.props.data;

    return (
    <div className="card">
      <img src={avatar_url} alt="avatar"/>
      <div className="card-info">
        <h3 className="name">{name}</h3>
        <p className="username">{login}</p>
        <p>Location: {location}</p>
        <p>Profile:
          <a href={html_url}>{html_url}</a>
        </p>
        <p>Followers: {followers}</p>
        <p>Following: {following}</p>
        <p>Bio: {bio}</p>
      </div>
    </div>
    )
  }
}

export default GithubCard;
