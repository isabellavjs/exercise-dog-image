import React, { Component } from 'react';

class FetchApi extends Component {
  constructor(props) {
    super();

    this.state = {
      message: '',
      isLoading: true,
    }
    this.fetchDog = this.fetchDog.bind(this);
    this.renderDog = this.renderDog.bind(this);
  }


  fetchDog() {

    this.setState({
      isLoading: true
    }, () => {
      const requestHeader = { headers: { Accept: "application/json" } }
      fetch('https://dog.ceo/api/breeds/image/random', requestHeader)
        .then(result => result.json())
        .then(obj => {



          this.setState({
            message: obj.message,
            isLoading: false

          })
        })
    })

  }

  componentDidMount() {
    this.fetchDog();
  }

  shouldComponentUpdate() {
    const isBreedTerrier = this.state.message.includes('terrier');
    if (isBreedTerrier) alert('Terrier');

    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    const { message } = prevState;
    localStorage.setItem("url", message)

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
    const { isLoading } = this.state;
    return (
      <div>
        <h1>Doggos around the world</h1>
        <div>{isLoading ? <p>Loading...</p> : this.renderDog()}</div>
      </div>
    )
  }
}

export default FetchApi;