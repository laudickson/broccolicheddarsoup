import React from 'react';
import ReactDOM from 'react-dom';
import Main from "./Main";
import "./stylesheets/index.css";

ReactDOM.render(
  <Main/>,
  document.getElementById('root')
);

registerServiceWorker();
