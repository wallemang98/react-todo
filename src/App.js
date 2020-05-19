import React, { Component } from 'react';

//our component Todos.js
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';

//importing can be used as variables
//import logo from './logo.svg';
import './App.css';

//importing uuid from npm i uuid
//npmjs.com/package/uuid
const { v4: uuidv4 } = require('uuid');


class App extends Component {

state = {
  todos: [
    {
      id: uuidv4(),
      title: 'Take out the trash',
      completed: false
    },
    {
      id: uuidv4(),
      title: 'Dinner with wife',
      //line through
      completed: false
    },
    {
      id: uuidv4(),
      title: 'Meeting with boss',
      completed: false
    }
  ]
}
//toggle complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
        if(todo.id === id) {
          todo.completed = !todo.completed
        }

        return todo;
    }) });
  }

//delete Todo
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter
      (todo => todo.id!== id)] });
  }

  //add // TODO:
  addTodo = (title) => {
    const newTodo = {
      id: uuidv4(),
      //es6 allows title: 'title', shorthand
      title,
      completed: false
    }
    //newTodo variable
    this.setState({ todos: [...this.state.todos, newTodo]})
  }

  //render is the only required LIFECYCLE method, renders on browser
  render() {

  //returns JSX
  //we can access state array via this state todos
  //console.log(this.state.todos)
  return (
    <div className="App">
      <div className="container">
        <Header />
        <AddTodo addTodo={this.addTodo }/>
        <Todos todos={this.state.todos}
                markComplete={ this.markComplete }
                delTodo={this.delTodo}/>
      </div>
    </div>
  );
  }
}

export default App;
