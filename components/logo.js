const React = require('react');

class Logo extends React.Component {
  render() {
    const { hasError, idyll, updateProps, ...props } = this.props;
    return (
      <div style={{width: '100%', color: 'black'}}>
        <div style={{width: '100%', textAlign: 'left', fontSize: 70, fontFamily: 'Bluu', lineHeight: '72px'}}>
          <span style={{characterSpacing: '2.4px'}}>Parametric</span><br/>
          Press
        </div>
        <div style={{fontFamily: 'Graphik Web', fontSize: 20, marginTop: '1em'}}>
          Some Text Goes Here
        </div>
      </div>
    );
  }
}

module.exports = Logo;
