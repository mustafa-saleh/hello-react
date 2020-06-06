import React, { Component } from 'react'

class TableBody extends Component { 
  render () {
    let { removeChar } = this.props
    return (
        <tbody>
          {this.props.entries.map((item, idx) => (
            <tr key={idx}>
              <td>{item.name}</td>
              <td>{item.job}</td>
              <td>
                <button onClick={() => removeChar(idx)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
    )
  }
}

export default TableBody;