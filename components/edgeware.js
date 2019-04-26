

const React = require('react');

class Edgeware extends React.Component {
  render() {
    const { hasError, idyll, updateProps, ...props } = this.props;
    return (
      <div className="parametric-edgeware" style={{fontSize: 20, fontFamily: 'Graphik Web', color: 'black'}}>
        <div style={{position: 'fixed', top: '1em', textAlign: 'center', width: '100%'}}>
          @<a style={{color: 'black'}} href="https://twitter.com/parametricpress">ParametricPress</a>
        </div>
        <div style={{position: 'fixed', bottom: '1em', textAlign: 'center', width: '100%'}}>
            <a style={{color: 'black'}} href="./about/">About Us</a>
        </div>

        <div style={{position: 'fixed', left: '1em', textAlign: 'center', top: 0, bottom: 0}}>
          <div style={{ position: 'absolute', top: '50%', left: '50%', width: 250}}>
            <div style={{transform: 'translateX(-50%) translateY(-50%) rotate(-90deg)'}}>
              A Dynamic Publication
            </div>
          </div>
        </div>
        <div style={{position: 'fixed', right: '1em', textAlign: 'center', top: 0, bottom: 0}}>
          <div style={{ position: 'absolute', top: '50%', left: '50%', width: 250}}>
            <div style={{transform: 'translateX(-50%) translateY(-50%) rotate(90deg)'}}>
            Powered by <a style={{color: 'black'}} href="https://idyll-lang.org">Idyll</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Edgeware;

