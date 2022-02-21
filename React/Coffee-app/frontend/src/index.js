import React from 'react';
import ReactDOM from 'react-dom';
import CoffeeApp from './CoffeeApp';
// Bootstrap's CSS
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <CoffeeApp />
  </React.StrictMode>,
  document.getElementById('root')
);
