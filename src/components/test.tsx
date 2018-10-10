import * as React from 'react';
// import './App.css';
import {connect} from 'react-redux';
const mapStateToProps = (state: any) => {
  return {
      customList: state.customList
  };
};
// import './index.css';
class Test extends React.Component {
  public props: any
  public constructor (arg: any) {
    super(arg)
    // tslint:disable-next-line:no-console
    console.log(this.props)
  }
  public render() {
    return (
        <div className="App">
            状态管理树
            {this.props.customList.map((item:any) => 
              <div key={item.id}>{item.name}</div>
            )}
            <i className="iconfont icon-zhangshangcaifuyemianshoujiban243"/>
        </div>
    );
  }
}
const TestConnet = connect(mapStateToProps)(Test);
export default TestConnet;