import { SearchBar } from 'antd-mobile';
import * as React from 'react';
import {connect} from 'react-redux';
import {store} from 'src/store'
import huanyucheng from 'static/img/huanyucheng.jpg'
import lingnan from 'static/img/lingnan.jpg'
import '../../static/animation/vivify.min.css';
import './index.less';
const mapStateToProps = (state: any) => {
  return {
      meta: state.meta
  };
};
class Home extends React.Component<any> {
    // public componentDidMount () {
    // }
    public render() {
      // tslint:disable-next-line:no-console
      console.log(this.props.meta, 1)
      store.subscribe(() =>
      // tslint:disable-next-line:no-console
        console.log(store.getState(), 'update')
      )
      store.dispatch({
        text: 'hehe',
        type: 'update'
      })
      // tslint:disable-next-line:no-console
      console.log(this.props.meta, '2')
      return (
        <div className="Home">
            {/* {this.props.location.pathname} */}
            <SearchBar/>
            <div className="card" style={{background: `url(${huanyucheng})`}}>
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

  export default connect(mapStateToProps)(Home)