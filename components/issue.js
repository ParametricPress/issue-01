

const React = require('react');

class Issue extends React.Component {
  render() {
    const { hasError, idyll, updateProps, ...props } = this.props;
    return (
      <div className="parametric-issue-title" style={{width: '100%', fontFamily: 'Bluu', color: 'white'}}>
        <div>Issue 01</div>
        <div>Science + Society</div>
      </div>
    );
  }
}

module.exports = Issue;
