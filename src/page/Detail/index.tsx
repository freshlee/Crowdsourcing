import * as React from 'react';
import { connect } from 'react-redux';
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
class Detail extends React.Component<any, any> {
  public componentWillMount () {
    this.props.changeTitle(
      {
        text: '详情页',
        type: 'update'
      }
    )
  }
    public render() {
      return (
        <div className="Home">
            搜索列表
        </div>
      );
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(Detail)