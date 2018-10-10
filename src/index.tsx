import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import App from './App';
import appReducer from './store/index';
const store = createStore(appReducer);
import registerServiceWorker from './registerServiceWorker';
// tslint:disable-next-line:no-console
console.log(ReactDOM)
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
