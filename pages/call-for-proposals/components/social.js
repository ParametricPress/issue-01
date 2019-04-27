const React = require('react');

class CustomComponent extends React.PureComponent {

  constructor(props) {
    super(props)
    this.state = {
      opened: false
    }
  }

  handleFacebookClick() {
    const text = document.querySelector('meta[property="og:title"]').getAttribute('content');
    window.open(`http://www.facebook.com/sharer/sharer.php?u=${escape(window.location.origin + window.location.pathname)}&title=${escape(text)}`, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');
    return false;
  }

  handleTwitterClick() {
      const text = document.querySelector('meta[property="twitter:title"]').getAttribute('content');
      window.open(`https://twitter.com/share?url=${escape(window.location.origin + window.location.pathname)}&text=${escape(text)}`, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');
      return false;
  }

  render() {
    const { hasError, idyll, updateProps, ...props } = this.props;
    const { opened }  = this.state;
    return (
      <div style={{display: 'flex', flexDirection: 'row', width: 80, margin: '10px auto'}}>
        <div style={{width: '100%', cursor: 'pointer', height: 20}} >
          <img style={{height: '80%', width: 'auto', margin: '0 auto', position: 'relative', top: '10%'}} onClick={this.handleTwitterClick.bind(this)} src="static/images/twitter.png" />
        </div>
        <div style={{width: '100%', cursor: 'pointer', height: 20}} >
            <img  style={{height: '100%', width: 'auto', margin: '0 auto'}} onClick={this.handleFacebookClick.bind(this)} src="static/images/facebook.png" />
        </div>
      </div>
    );
  }
}

module.exports = CustomComponent;
