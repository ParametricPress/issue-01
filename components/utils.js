

let fontsLoaded = false;
let fontsLoading = false;
let cbs = [];

module.exports = {
  isMobile: () => {
    if (typeof window === 'undefined') {
      return false;
    }
    return window.innerWidth <= 800;
  },

  isServer: () => {
    return typeof window === 'undefined';
  },

  loadFonts: (cb) => {
    const load = require("little-loader");
    cbs.push(cb);
    if (fontsLoaded) {
      cb && cb();
      return;
    }
    if (fontsLoading) {
      return;
    }
    fontsLoading = true;
    load("/static/fonts/graphik/Graphik-Bold-Web.woff2", () => {
      fontsLoaded = true;
      cbs.forEach(cb => {
        cb();
      });
    });
  },

  fontsLoaded: () => {
    return fontsLoaded;
  },
  fontsLoading: () => {
    return fontsLoading;
  }
}