import { Button, Icon, NavBar } from 'antd-mobile';
// import 'antd-mobile/lib/button/style/css';
import * as React from 'react';
import './index.css';
class Home extends React.Component {
    public render() {
      return (
        <div className="Home">
            <NavBar
              icon={<Icon type="left" />}
            />
            <Button>sada</Button>
        </div>
      );
    }
  }

  export default Home