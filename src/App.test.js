import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

test('renders', () => {
  const label = document.createElement('label');
  ReactDOM.render(<App />, label);
  ReactDOM.unmountComponentAtNode(label);
});

test1('rendersDiv', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test2('rendersButton', () => {
  const button = document.createElement('button');
  ReactDOM.render(<App />, button);
  ReactDOM.unmountComponentAtNode(button);
});







