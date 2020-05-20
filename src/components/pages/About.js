import React, { Component } from 'react';

function About() {
  return (

    //instead of using DOM element
    //we can use <React.Fragment></> to create ghost elements now seen in DOM
    //but use JSX
    <React.Fragment>
      <h1>About</h1>
      <p>This is the TodoList app v1.0.0. It is part of a React course</p>
    </React.Fragment>
  )
}

export default About;
