import React, { Component } from 'react'

class Api extends Component { 

  state = {
    data: []
  }

  componentDidMount() {
    let url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=Friends&format=json&origin=*'

    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({data: res})
      })
  }

  render () {
    let entries = this.state.data.map((v, idx) => {
      return <li key={idx}>{v}</li>
    })
    return (
      <div>
        <ul>{entries}</ul>
      </div>
    )
  }
}

export default Api;