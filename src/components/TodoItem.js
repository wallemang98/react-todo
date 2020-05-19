import React, { Component } from 'react'

//to specify prop types, we must import them
import PropTypes from 'prop-types';

export class TodoItem extends Component {

  getStyle = () => {
    if(this.props.todo.completed) {
      return {
        textDecoration: 'line-through'
      } //closing return
    }//closing if
    else {
      return {
        textDecoration: 'none'
      }//closing return
    }//closing else
  } //closing getStyle()

  render() {
    return (
      <div style={ this.getStyle() }>
        <p> { this.props.todo.title }</p>
      </div>
    )
  }
}
TodoItem.propTypes = {
  todos: PropTypes.object.isRequired
}


//DONT FORGET TO EXPORT
export default TodoItem
