// import {connect} from 'react-redux';
// import { DatePicker, LocaleProvider, message } from 'antd';
import {Icon ,NavBar} from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.less';
import * as React from 'react';
import {connect} from 'react-redux';
// import * as browserHistory from 'react-router';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import fix from './lib/flexible';
import Detail from './page/Detail';
import Home from './page/home/index';
import './theme.less';
const mapStateToProps = (state: any) => {
  return {
      meta: state.meta
  };
};
fix()

class App extends React.Component<any, any> {
  public componentWillReceiveProps() {
    this.render()
  }
  public render() {
    // const state = this.state
    return (
      <div className="App">
        <NavBar
          icon={<Icon type="left" />}>
          {this.props.meta.name}
        </NavBar>
        <Router>
          <div>
          <Switch>
            <Route exact={true} component={Home} path="/" />
            <Route component={Detail} path="/Detail" />
          </Switch>
            {/* <NavLink to="/" >首页</NavLink>
            <NavLink to="/SearchList">搜索栏</NavLink> */}
          </div>
        </Router>
      </div>  
    );
  }
}
export default connect(mapStateToProps)(App);
