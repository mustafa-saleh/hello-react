import React, { Component } from 'react'

class AddNew extends Component { 

  initialState = {
    name: '',
    job: ''
  }

  state = this.initialState

  submitted  = () => { 
    let { submit } = this.props

    submit(this.state);
    this.setState(this.initialState);
  }

  handleChange = event => {
    let { name, value} = event.target

    this.setState({
      [name]: value
    })
  }

  render () {
    let { name, job } = this.state

    return (
      <div>
        <h2>Add New</h2>
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" value={name} onChange={this.handleChange}></input>
          
          <label htmlFor="job">Designation</label>
          <input type="text" id="job" name="job" value={job} onChange={this.handleChange}></input>
          
          <input type="submit" value="Submit" onClick={this.submitted} />
        </form>
      </div>
    )
  }
}

export default AddNew;