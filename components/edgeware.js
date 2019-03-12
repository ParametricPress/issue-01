

const React = require('react');

class Edgeware extends React.Component {
  render() {
    const { hasError, idyll, updateProps, ...props } = this.props;
    return (
      <div style={{fontSize: 20, fontFamily: 'Graphik Web', color: 'black'}}>
        <div style={{position: 'fixed', top: '1em', textAlign: 'center', width: '100%'}}>
          @parametric
        </div>
        <div style={{position: 'fixed', bottom: '1em', textAlign: 'center', width: '100%'}}>
          Spring 2019
        </div>

        <div style={{position: 'fixed', left: '1em', textAlign: 'center', top: 0, bottom: 0}}>
          <div style={{ position: 'absolute', top: '50%', left: '50%', width: 200}}>
            <div style={{transform: 'translateX(-50%) translateY(-50%) rotate(-90deg)'}}>
              Powered by Idyll
            </div>
          </div>
        </div>
        <div style={{position: 'fixed', right: '1em', textAlign: 'center', top: 0, bottom: 0}}>
          <div style={{ position: 'absolute', top: '50%', left: '50%', width: 200}}>
            <div style={{transform: 'translateX(-50%) translateY(-50%) rotate(90deg)'}}>
              Other Text
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Edgeware;

