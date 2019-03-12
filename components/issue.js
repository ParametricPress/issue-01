

const React = require('react');

class Issue extends React.Component {
  render() {
    const { hasError, idyll, updateProps, ...props } = this.props;
    return (
      <div style={{width: '100%', textAlign: 'right', fontSize: 70, fontFamily: 'Bluu', color: 'white', lineHeight: '72px'}}>
        <div>Volume 01</div>
        <div>Science + Society</div>
      </div>
    );
  }
}

module.exports = Issue;
