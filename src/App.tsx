// import {connect} from 'react-redux';
// import { DatePicker, LocaleProvider, message } from 'antd';
import {Icon ,NavBar} from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.less';
import * as React from 'react';
import * as browserHistory from 'react-router';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import fix from './lib/flexible';
import Detail from './page/Detail';
import Home from './page/home/index';
import './theme.less';

fix()

class App extends React.Component {
  public render() {
    // tslint:disable-next-line:no-console
    console.log(browserHistory)
    return (
      <div className="App">
        <NavBar
          icon={<Icon type="left" />}>
          首页
        </NavBar>
        <Router>
          <div>
            <Route exact={true} component={Home} path="/" />
            <Route component={Detail} path="/Detail" />
            {/* <NavLink to="/" >首页</NavLink>
            <NavLink to="/SearchList">搜索栏</NavLink> */}
          </div>
        </Router>
      </div>  
    );
  }
}
export default App;
