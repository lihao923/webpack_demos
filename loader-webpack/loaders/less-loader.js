let less = require('less');

function loader(source) {
    let css;
    less.render(source, function(err, r) { // r.css(渲染完后的css)
        css = r.css;
    });
    return css;
}

module.exports = loader;
