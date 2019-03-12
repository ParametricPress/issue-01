const React = require('react');
const Logo = require('./logo');
const Issue = require('./issue');

class TopMatter extends React.Component {
  render() {
    const { hasError, idyll, updateProps, ...props } = this.props;
    return (
      <div style={{display: 'flex', width: '90vw', margin: '3em auto', flexDirection: 'row'}}>
        <div style={{flex: 1}}>
          <Logo />
        </div>
        <div style={{flex: 1}}>
          <Issue />
        </div>
      </div>
    );
  }
}

module.exports = TopMatter;
