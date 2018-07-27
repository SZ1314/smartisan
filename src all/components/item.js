import React, { Component } from 'react'

export default class Item extends Component {
  constructor(props) {
    super(props)
    this.handleDelete = this.handleDelete.bind(this)
  }
  render() {
    return (
      <li>{this.props.title} <button onClick={this.handleDelete}>Delete</button></li>
    )
  }

  handleDelete() {
    this.props.handleDelete(this.props.index)
  }
}



/*import React, {
  Component
}
from 'react'

export default class Item extends Component {
  constructor(props) {
    super(props)
    this.handleDelete = this.handleDelete.bind(this)
  }
  render() {
    return (
      <li>{this.props.title}<button onClick={this.handleDelete}>Delete</button></li>
    )
  }

  handleDelete() {
    this.props.handleDelete(this.props.index)
  }
}*/