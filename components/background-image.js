

const React = require('react');

class BackgroundImage extends React.Component {
  render() {
    const { hasError, idyll, updateProps, ...props } = this.props;
    return (
      <div>
        <div style={{position: 'fixed', top: '50%', left:'50%', transform:'translate(-50%, -50%)', zIndex: -1}}>
          <img className="parametric-bg-image" src="static/images/bunny.png" />
        </div>
      </div>
    );
  }
}

module.exports = BackgroundImage;
