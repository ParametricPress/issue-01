const React = require('react');

class Logo extends React.Component {
  render() {
    const { hasError, idyll, updateProps, ...props } = this.props;
    return (
      <div style={{width: '100%', color: 'black'}}>
        <div className="parametric-cover-title" style={{width: '100%', textAlign: 'left', fontFamily: 'Bluu'}}>
          <span style={{characterSpacing: '2.4px'}}>Parametric</span><br/>
          Press
        </div>
        <div style={{fontFamily: 'Graphik Web', fontSize: 20, marginTop: '1em'}}>
          Spring 2019
        </div>
      </div>
    );
  }
}

module.exports = Logo;
