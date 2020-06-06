import React, { Component } from 'react'

class TableHead extends Component { 
  render () {
    return (
        <thead>
          <tr>
            <th> Name </th>
            <th> Designation </th>
            <th> Change </th>
          </tr>
        </thead>
    )
  }
}

export default TableHead;