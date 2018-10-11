import { Icon, NavBar } from 'antd-mobile';
import * as React from 'react';
import logo from 'static/img/prettygril.jpg';
// import 'antd-mobile/lib/button/style/css';
import '../../static/animation/vivify.min.css';
import './index.less';
class Home extends React.Component {
    public render() {
      return (
        <div className="Home">
            <NavBar
              icon={<Icon type="left" />}
            />
            <div className="map">
              <div className="popup-msg vivify driveInTop">
                <div className="protrait">
                  <img src={logo} alt=""/>
                </div>
                <div className="content-wrap">
                  <div className="content">
                    看来这家店不错哦看来这家店不错哦看来这家店不错哦
                  看来这家店不错哦
                  </div>
                {/* driveInTop */}
                </div>
              </div>
            </div>
        </div>
      );
    }
  }

  export default Home