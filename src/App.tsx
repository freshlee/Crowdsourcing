// import {connect} from 'react-redux';
// import { DatePicker, LocaleProvider, message } from 'antd';
import * as React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Home from './page/home/index';
import SearchList from './page/searchList';



class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact={true} component={Home} path="/" />
            <Route component={SearchList} path="/SearchList" />
            {/* <NavLink to="/" >首页</NavLink>
            <NavLink to="/SearchList">搜索栏</NavLink> */}
          </div>
        </Router>
      </div>  
    );
  }
}
export default App;
