import React, { Component } from 'react'
import TableHead from './TableHead'
import TableBody from './TableBody'

class Table extends Component { 

  render () {
    let { chars, removeChar } = this.props
    return (
      <div>
        <table>
          <TableHead />
          <TableBody entries={chars} removeChar={removeChar} />
        </table>
      </div>
    )
  }
}

export default Table;