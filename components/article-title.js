

const React = require('react');
const d3 = require('d3');

class ArticleTitle extends React.Component {
  constructor(props) {
    super(props);
    this._animId = Math.round(3 * Math.random()) + 1;
  }

  handleSelectionOn() {
    d3.select('.parametric-bg-image').attr('src', this.props.image);
  }

  handleSelectionOff() {
    d3.select('.parametric-bg-image').attr('src', 'static/images/bunny.png');
  }

  render() {
    const { hasError, idyll, updateProps, ...props } = this.props;
    return (
      <div className={`article-title animation-${this._animId}`} onMouseEnter={this.handleSelectionOn.bind(this)} onMouseLeave={this.handleSelectionOff.bind(this)}>
        <a href="https://parametric.press">
          <svg style={{width: '100vw', height: 100}} viewBox="0 0 1000 100">
            <text x="500" y="70" alignmentBaseline="baseline" textAnchor="middle" fontSize="70" fill="none" strokeWidth="1" stroke="#fff" fontFamily="Graphik Web" fontWeight="bold">
            {props.children}</text>
          </svg>
        </a>
      </div>
    );
  }
}

module.exports = ArticleTitle;
