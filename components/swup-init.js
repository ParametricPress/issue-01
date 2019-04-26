const React = require('react');

class SwupInit extends React.Component {
  componentDidMount() {
    const Swup = require('swup').default;

    console.log(Swup);
    const swupMergeHeadPlugin = require('swup/plugins/swupMergeHeadPlugin');
    console.log(swupMergeHeadPlugin);

    const options = {
      elements: ['#idyll-mount'],
      plugins: [
          swupMergeHeadPlugin
      ]
    }

    new Swup(options);
  }

  render() {
    return null;
  }
}

module.exports = SwupInit;
