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

//arrow functions allows us to avoid using
// this.markComplete.bind(this) in the checkbox below
  markComplete = (e) => {
    console.log(this.props)
  }

  render() {
    const {id, title } = this.props.todo;
    return (
      //accessing getStyle()
      <div style={ this.getStyle() }>
        <p>
        <input type="checkbox" onChange={this.props.markComplete.bind
          (this, id) }/> { ' '}
        { title }
        </p>
      </div>
    )
  }
}

//todos are objects
TodoItem.propTypes = {
  todos: PropTypes.object.isRequired
}


//DONT FORGET TO EXPORT
export default TodoItem
