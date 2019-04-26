

const Swup = require('swup').default;
const swupMergeHeadPlugin = require('swup/plugins/swupMergeHeadPlugin');


console.log(swupMergeHeadPlugin);
const options = {
  elements: ['#idyll-mount'],
  plugins: [
      swupMergeHeadPlugin
  ]
}

const swup = new Swup(options);


// swup.on('swup:contentReplaced', function () {
//   console.log('head content replaced');
// });

module.exports = swup;