import React from 'react'
import logo from 'static/img/prettygril.jpg';
import './index.less';
class PopupMsg extends React.Component {
    public  render () {
        return (
            <div className="popup-msg vivify driveInTop">
                <div className="protrait">
                <img src={logo} alt=""/>
                </div>
                <div className="content-wrap">
                <div className="content">
                    看来这家店不错哦看来这家店不错哦看来这家店不错哦看来这家店不错哦看来这家店不错哦看来这家店不  错哦看来这家店不错哦看来这家店不错哦
                </div>
                {/* driveInTop */}
                </div>
            </div> 
        )
    }
}

export default PopupMsg