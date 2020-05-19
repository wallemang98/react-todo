//BE SURE TO IMPORT COMPONENTS WITH REACT
import React, { Component } from 'react';

//we must import components to use them.
import TodoItem from './TodoItem';

//to specify prop types, we must import them
import PropTypes from 'prop-types';

class Todos extends Component {

  render() {
     return this.props.todos.map((todo) => (
       //passing prop todo, with key todo.id
       <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete}  />
     ));
   }
}

// Proptypes
Todos.propTypes = {
  todos: PropTypes.array.isRequired
}
export default Todos;
