import React, {Component} from 'react';
import Table from './Table'
import AddNew from './AddNew';
import './App.css';
import Api from './Api'

class App extends Component {
  state = {
    chars: []
  }

  removeChar = (idx) => {
    this.setState({
      chars: this.state.chars.filter((val, i) => {
        return i !== idx
      })
    })
  }

  addChar = char => {
    this.setState({
      chars: [...this.state.chars, char]
    })
  }

  render () {
    let { chars } = this.state
    return (
      <div className="container">
        <h1>Welcome to Job Board</h1>
        <Table chars={chars} removeChar={this.removeChar} />
        <AddNew submit={this.addChar}/>
        <Api />
      </div>
    )
  }
}

export default App;
