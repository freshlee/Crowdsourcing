import * as React from 'react';
// import {connect} from 'react-redux';
import './App.css';
import Test from './components/test';

import logo from './logo.svg';
// const mapStateToProps = (state) => {
//   return {
//       customList: state.customList
//   };
// };

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Test/>
      </div>
    );
  }
}
export default App;
