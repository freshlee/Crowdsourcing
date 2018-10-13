import { SearchBar } from 'antd-mobile';
// import createHistory from 'history/createBrowserHistory'
import * as React from 'react';
import {connect} from 'react-redux';
import huanyucheng from 'static/img/huanyucheng.jpg'
import lingnan from 'static/img/lingnan.jpg'
import '../../static/animation/vivify.min.css';
import './index.less';
const mapStateToProps = (state: any) => {
  return {
      meta: state.meta
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    changeTitle: (...args: []) => dispatch(...args)
  }
}
class Home extends React.Component<any> {
    public componentWillMount () {
      this.props.changeTitle(
        {
          text: '首页',
          type: 'update'
        }
      )
    }
    public toLink () {
      // tslint:disable-next-line:no-console
      // console.log(withRouter)
      // const history = createHistory()
      return () => {
        this.props.history.push('/Detail')
      }
    }
    public render() {
      return (
        <div className="Home">
            {/* {this.props.location.pathname} */}
            <SearchBar/>
            <div className="card" style={{background: `url(${huanyucheng})`}} onClick={this.toLink.call(this)}>
              <span className="title">岭南新天地</span>
              <div className="desc">LINGNAN XINTIANDI </div>
              <div className="bottom-wrap">
                <div className="bottom">
                  <span>热度: 3400人/天</span>
                  <span>距离您: 300m</span> 
                </div>
              </div>
            </div>
            <div className="card" style={{background: `url(${lingnan})`}}>
              <span className="title">串胡同</span>
              <div className="desc">BEIJING HUTONG</div>
              <div className="bottom-wrap">
                <div className="bottom">
                  <span>热度: 3400人/天</span>
                  <span>距离您: 300m</span>
                </div>
              </div>
            </div>    
        </div>
      );
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(Home)