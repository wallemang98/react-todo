import React, { Component } from 'react';

//importing can be used as variables
//import logo from './logo.svg';
import './App.css';
//importing our react-router and our about component
import { BrowserRouter as Router, Route } from 'react-router-dom';
//our component Todos.js
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import axios from 'axios';

//importing uuid from npm i uuid
//npmjs.com/package/uuid
//**Json placeholder api removes our need for UUID**
//const { v4: uuidv4 } = require('uuid');


class App extends Component {

state = {
  todos: []
}

componentDidMount() {
  axios.get('http://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res => this.setState({ todos: res.data }))
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
    axios.delete('http://jsonplaceholder.typicode.com/todos/${id}')
    .then(res => this.setState({ todos: [...this.state.todos.filter
        (todo => todo.id!== id)] }));
  }

  //add // TODO:
  addTodo = (title) => {

    axios.post('http://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    }).then(res => this.setState({ todos: [...this.state.todos, res.data] }));
  }

  //render is the only required LIFECYCLE method, renders on browser
  render() {

  //returns JSX
  //we can access state array via this state todos
  //console.log(this.state.todos)

  //Route '/' is considered home, so we need to have our todolist routed here
  return (
    <Router>
      <div className="App">
        <div className="container">
          <Header />

          <Route exact path="/" render={ prop => (
            <React.Fragment>
              <AddTodo addTodo={this.addTodo }/>
              <Todos todos={this.state.todos}
                      markComplete={ this.markComplete }
                      delTodo={this.delTodo}/>
            </React.Fragment>
          )} />

          <Route path="/about" component={About} />
        </div>
      </div>
    </Router>
  );
  }
}

export default App;
