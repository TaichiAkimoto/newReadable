import React, { Component } from 'react'
import serializeForm from 'form-serialize'

export default class EditView extends Component {
  handleSubmit = (e) => {
    e.preventDefault()
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className='createEditForm'>
           <button>Push!</button>
        </form>
      </div>
    )
  }
}