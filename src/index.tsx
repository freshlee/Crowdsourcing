import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import {createStore} from 'redux';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
// tslint:disable-next-line:no-console
console.log(React)
ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
