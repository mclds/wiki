var anchor = require("markdown-it-anchor");


/** @type {import('../node_modules/ewiki/lib/interface').Plugin} */
exports.default = {
  onMarkdownItInit(md) {
    md.use(anchor, {
      permalink: anchor.permalink.ariaHidden({
        placement: 'after'
      })
    })
  }
}
