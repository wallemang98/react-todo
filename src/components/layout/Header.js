import React from 'react';

//NO <a> tag, we must import link from 'react-router-dom' and use the LINK tag
import { Link } from 'react-router-dom';

function Header() {
  return(
    <header style={headerStyle}>
      <h1>TodoList</h1>
      <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link>
    </header>
  )
}

const linkStyle = {
  color: '#fff',
  textDecoration: 'none'
}

const headerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px'
}
export default Header;
