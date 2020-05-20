import React, { Component } from 'react'

//to specify prop types, we must import them
import PropTypes from 'prop-types';

export class TodoItem extends Component {

//create style method to compate completed status and
//add appropriate styling
  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      //if completed put line through, if not then none
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  } //closing getStyle()

  render() {
    const {id, title } = this.props.todo;

    const btnStyle = {
      background: '#ff0000',
      color: '#fff',
      border: 'none',
      padding: '5px 9px',
      borderRadius: '50%',
      cursor: 'pointer',
      float: 'right'
    }
    return (
      //accessing getStyle()
      <div style={ this.getStyle() }>
        <p>
        <input type="checkbox" onChange={this.props.markComplete.bind
          (this, id) }/> { ' '}

        { title }

        <button onClick={this.props.delTodo.bind(this, id)}
          style={btnStyle}>x</button>

        </p>
      </div>
    )
  }
}

//todos are objects
TodoItem.propTypes = {
  todos: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
}

export default TodoItem
