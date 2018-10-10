// import {connect} from 'react-redux';
// import { DatePicker, LocaleProvider, message } from 'antd';
import * as React from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import './App.css';
import Home from './page/home/index';
import SearchList from './page/searchList';



class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Router>
          <Route component={Home} Path="/" />
          <Route component={SearchList} Path="/" />
        </Router>
        <Link to="/Home" />
        <Link to="/SearchList" />
      </div>
    );
  }
}
export default App;
