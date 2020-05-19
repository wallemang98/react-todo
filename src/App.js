import React, { Component } from 'react';
//our component Todos.js
import Todos from './components/Todos';

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
      completed: true
    },
    {
      id: 3,
      title: 'Meeting with boss',
      completed: false
    }
  ]
}


  //render is the only required LIFECYCLE method, renders on browser
  render() {

  //returns JSX
  //we can access state array via this state todos
  //console.log(this.state.todos)
  return (
    <div className="App">
      <Todos todos={this.state.todos} />
    </div>
  );
  }
}

export default App;
