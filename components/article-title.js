

const React = require('react');
const d3 = require('d3');

let id = 0;

class ArticleTitle extends React.Component {
  constructor(props) {
    super(props);
    this._animId = ++id;
    this._id = id;
    this.state = {
      showMeta: false,
      showHoverL: false,
      showHoverM: false,
      showHoverR: false
    }
  }

  componentDidMount() {
    this.bgImage = d3.select('.parametric-bg-image');
    this.titles = d3.selectAll('.article-title .container');
  }

  handleSelectionOn(suffix) {
    return () => {
      this.bgImage.attr('src', this.props.image);
      this.titles.style('animation-play-state', 'paused');
      this.setState({
        ['showHover' + suffix]: true
      })
    }
  }

  handleSelectionOff(suffix) {
    return () => {
      this.bgImage.attr('src', 'static/images/bunny.png');
      this.titles.style('animation-play-state', 'running');
      this.setState({
        ['showHover' + suffix]: false
      })
    }
  }

  handleRef(ref) {
    if (!ref || this.state.showMeta) {
      return;
    }
    const $svg = d3.select(ref).select('svg')
    const svg = $svg.node();
    this.$svg = $svg;
    let pt = svg.createSVGPoint();
    const tSpanNode = $svg.select(`#parametric-title-mid-${this._id}`).node();
    const bbox = tSpanNode.getBoundingClientRect();
    pt.x = bbox.left;
    pt.y = bbox.top;
    const pt2 = pt.matrixTransform(svg.getScreenCTM().inverse());
    pt.x = bbox.right;
    pt.y = bbox.bottom;
    pt = pt.matrixTransform(svg.getScreenCTM().inverse());
    this.setState({
      showMeta: true,
      x: pt2.x,
      y: pt2.y,
      width: pt.x - pt2.x,
      height: pt.y - pt2.y,
    })
  }

  getXFactor() {
    const isFirefox = typeof InstallTrigger !== 'undefined';
    if (isFirefox) {
      return 2;
    }
    return 1;
  }

  render() {
    const { hasError, idyll, updateProps, ...props } = this.props;
    const { x, y, width, height, showMeta, showHoverL, showHoverM, showHoverR } = this.state;
    const xFactor = this.getXFactor();
    return (
      <div className={`article-title animation-${this._animId} ${showMeta ? 'animating' : ''}`} ref={this.handleRef.bind(this)}>
        {/* <a href="https://parametric.press"> */}
          <svg style={{width: '100vw', height: 120}} viewBox="0 0 1000 120">
            <g className="container">
              <text x="500" y="70" alignmentBaseline="baseline" textAnchor="middle" fontSize="70" fill="none" strokeWidth="1" stroke="#fff" fontFamily="Graphik Web" fontWeight="bold">
                {
                  showMeta ? <a xlinkHref={props.url}><tspan onMouseEnter={this.handleSelectionOn('L')} onMouseLeave={this.handleSelectionOff('L')}>{props.children}</tspan></a> : null
                }
                <a xlinkHref={props.url}><tspan id={`parametric-title-mid-${this._id}`} dx={70} onMouseEnter={this.handleSelectionOn('M')} onMouseLeave={this.handleSelectionOff('M')}>{props.children}</tspan></a>
                {
                  showMeta ? <a xlinkHref={props.url}><tspan dx={70} onMouseEnter={this.handleSelectionOn('R')} onMouseLeave={this.handleSelectionOff('R')}>{props.children}</tspan></a> : null
                }
              </text>
              <g style={{display: showHoverL ? 'block' : 'none'}}>
                {
                  showMeta ?
                    <text dx={-70 + 5} x={x - xFactor * width - 80} y={95} textAnchor="left" fontSize="16" fill="#fff" fontFamily="Graphik Web">
                      By {props.author}
                    </text>
                    : null
                }
                {
                  showMeta ?
                    <text dx={-70 -28} x={x - xFactor * width - 80} y={32} textAnchor="left" fontSize="16" fill="#fff" fontFamily="Graphik Web">
                      0{this._id}
                    </text>
                    : null
                }
              </g>
              <g style={{display: showHoverM ? 'block' : 'none'}}>
                {
                  showMeta ?
                    <text dx={-70 + 5} x={x} y={95} textAnchor="left" fontSize="16" fill="#fff" fontFamily="Graphik Web">
                      By {props.author}
                    </text>
                    : null
                }
                {
                  showMeta ?
                    <text dx={-70 -28} x={x} y={32} textAnchor="left" fontSize="16" fill="#fff" fontFamily="Graphik Web">
                      0{this._id}
                    </text>
                    : null
                }
              </g>
              <g style={{display: showHoverR ? 'block' : 'none'}}>
                {
                  showMeta ?
                    <text dx={-70 + 5} x={x + xFactor * width + 85} y={95} textAnchor="left" fontSize="16" fill="#fff" fontFamily="Graphik Web">
                      By {props.author}
                    </text>
                    : null
                }
                {
                  showMeta ?
                    <text dx={-70 -28} x={x + xFactor * width + 85} y={32} textAnchor="left" fontSize="16" fill="#fff" fontFamily="Graphik Web">
                      0{this._id}
                    </text>
                    : null
                }
              </g>
            </g>
          </svg>
        {/* </a> */}
      </div>
    );
  }
}

module.exports = ArticleTitle;
