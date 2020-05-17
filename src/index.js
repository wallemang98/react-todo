import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//parent component that wraps everything
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  //grabbing root div on public/index.html
  document.getElementById('root')
);
