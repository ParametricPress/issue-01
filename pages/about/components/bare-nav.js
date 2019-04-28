import React from 'react';
// import ARTICLES from './articles';

const formatTitle = (title) => {
  return title.reduce((memo, str, i) => {
    if (i < title.length - 1) {
      return memo.concat([<span key={str}>{str}</span>, <br key={i} />]);
    }
    return memo.concat([<span key={str}>{str}</span>]);
  }, [])
}

class BareNav extends React.PureComponent {

  constructor(props) {
    super(props);
    this.handleContents = this.handleContents.bind(this);
    this.state = {
      showContent: false
    }
  }

  handleContents() {
    this.setState({
      showContent: !this.state.showContent
    });
  }

  render() {
    return (
      <div className="parametric-article-nav">
          <div>
          <a href="/"><img src="static/images/logo.png" style={{ display: 'inline', width: 238 }} /></a>
          </div>
      </div>
    )
  }
}
export default BareNav;
