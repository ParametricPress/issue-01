const React = require('react');
const Social = require('./social');

class CustomComponent extends React.PureComponent {

  constructor(props) {
    super(props)
    this.state = {
      opened: true
    }
  }
  render() {
    const { hasError, idyll, updateProps, ...props } = this.props;
    const { opened }  = this.state;
    return (
      <div className="sliderContainer">
      {/* <img  className="controls" src="static/images/control.png" /> */}
      <Social />
      <div onClick={() => this.setState({opened: !opened})} className="button">{opened ? 'Hide' : 'Show'} Controls</div>
        <div style={{opacity: opened ? 1 : 0, pointerEvents: opened ? 'all' : 'none'}} >
          {this.props.children}
        </div>
      </div>
    );
  }
}

module.exports = CustomComponent;
