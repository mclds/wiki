var  anchor = require("markdown-it-anchor");


exports.default = {
    onMarkdownItInit(md){
        md.use(anchor, {
          permalink: anchor.permalink.ariaHidden({
            placement: 'before'
          })
        })
    }
}
