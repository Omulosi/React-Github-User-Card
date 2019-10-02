import React, { Component } from 'react';

class GithubCard extends Component {

  render() {
    const {
      avatar_url,
      name,
      login,
      location,
      url,
      followers,
      following,
      bio
    } = this.props.data;

    return (
    <div class="card">
      <img src={avatar_url} />
      <div class="card-info">
        <h3 class="name">{name}</h3>
        <p class="username">{login}</p>
        <p>Location: {location}</p>
        <p>Profile:
          <a href={url}>{url}</a>
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
