import React, { Component } from 'react';

class FetchApi extends Component {
  constructor() {
    super();

    this.state = {
      message: '',
    }
    this.fetchDog = this.fetchDog.bind(this);
    this.renderDog = this.renderDog.bind(this);
  }


  fetchDog() {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(result => result.json())
      .then(obj => this.setState({ message: obj.message }))
  }

  componentDidMount() {
    this.fetchDog();
  }

  renderDog() {
    return (
      <div>
        <img src={this.state.message} alt="random dog" />
        <button onClick={this.fetchDog} >New dog</button>
      </div>
    )
  }

  render() {
    const loadingMessage = <span>Loading...</span>
    return (
      <div>
        <h1>Doggos around the world</h1>
        <div>{this.state.message ? this.renderDog() : loadingMessage}</div>
      </div>
    )
  }
}

export default FetchApi;