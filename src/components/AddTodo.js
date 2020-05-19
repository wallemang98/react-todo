import React, { Component } from 'react'

export class AddTodo extends Component {
  state = {
    title: ''
  }

//e is targeting the input text box, and whatever we type will be set as title
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

//method for when form submits
  onSubmit = (e) => {
    //since it's submit, it will try to submit to actual file, so stop:
    e.preventDefault();

    //we need to pass addTodo up through the file heirarchy, attaching it as
    //a prop. We are changing the title so we enter this.state.title as param
    this.props.addTodo(this.state.title);

    ////clearing the title field when we ar edone
    this.setState({ title: '' });
  }

  render() {
    return (
      <div>
      
        <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
          <input type="text"
                 name="title"
                 style={{ flex: '10', padding: '5px' }}
                 placeholder="Add Todo... "
                 value={this.state.title}
                 onChange={this.onChange}
          />

          <input type="submit"
                 value="Submit"
                 className="btn"
                 style={{ flex: '1' }} />
        </form>
      </div>
    )
  }
}

export default AddTodo
