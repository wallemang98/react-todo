import React, { Component } from 'react';

//our component Todos.js
import Todos from './components/Todos';
import Header from './components/layout/Header'
import AddTodo from './components/AddTodo'

//importing can be used as variables
//import logo from './logo.svg';
import './App.css';

class App extends Component {

state = {
  todos: [
    {
      id: 1,
      title: 'Take out the trash',
      completed: false
    },
    {
      id: 2,
      title: 'Dinner with wife',
      //line through
      completed: false
    },
    {
      id: 3,
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

  //render is the only required LIFECYCLE method, renders on browser
  render() {

  //returns JSX
  //we can access state array via this state todos
  //console.log(this.state.todos)
  return (
    <div className="App">
      <div className="container">
        <Header />
        <AddTodo />
        <Todos todos={this.state.todos}
                markComplete={ this.markComplete }
                delTodo={this.delTodo}/>
      </div>
    </div>
  );
  }
}

export default App;
