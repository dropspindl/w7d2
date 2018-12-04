import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/store';

window.store = store();

const Root = () => (
  <div>
    <h1>Todos App</h1>
  </div>
);

document.addEventListener('DOMContentLoaded', () => {
  const content = document.getElementById('content');
  ReactDOM.render(
    <Root />,
    content
  );
});
