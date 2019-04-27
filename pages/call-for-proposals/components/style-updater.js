const React = require('react');
const D3Component = require('idyll-d3-component');
const d3Select = require('d3-selection');
const d3Scale = require('d3-scale');

const size = 600;

class CustomD3Component extends D3Component {

  initialize(node, props) {
    this.$body = d3Select.select('body');
    this.$containers = d3Select.selectAll('.idyll-text-container');
    this.$controls = d3Select.selectAll('.sliderContainer');
    this.background = d3Scale.scaleLinear().domain([0, 1]).range(['#444', '#fff']);
    this.color = d3Scale.scaleLinear().domain([1, 0]).range(['#222', '#ccc']);
    this.fontSize = d3Scale.scaleSqrt().domain([0, 0.25, 1]).range([14, 20, 30]);
    this.maxWidth = d3Scale.scaleSqrt().domain([0, 0.25, 1]).range([600, 896, window.innerWidth - 150]);

    setTimeout(() => {
      this.$body.style('opacity', 1);
    })
  }

  update(props, oldProps) {
    const { brightness, fontSize } = props;
    console.log(this.fontSize(fontSize));
    console.log('max-width', this.maxWidth(fontSize))
    this.$body
      .style('color', this.color(brightness))
      .style('background', this.background(brightness))
      .style('font-size', this.fontSize(fontSize) + 'px')
      .style('line-height', 2 * this.fontSize(fontSize) + 'px');

    this.$body
      .selectAll('a')
      .style('color', this.color(brightness))

    // this.$controls

    //   .style('color', this.color(brightness));

    this.$controls.selectAll('button')
      // .style('border-bottom-color', this.color(brightness))
      .style('color', this.color(brightness));

    // this.$controls.selectAll('.button').style('border-bottom-color', this.color(brightness))

    this.$containers.style('max-width', this.maxWidth(fontSize) + 'px');

    // this.$containers.selectAll('li')
    //   .style('filter', `invert(${1 - brightness})`);
  }
}

module.exports = CustomD3Component;
