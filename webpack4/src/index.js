// let button = document.createElement('button');
// button.textContent = 'click me!';
// button.addEventListener('click', function() {
//     // vue的懒加载，react的懒加载
//     // es6草案中的语法，jsonp实现动态加载文件
//     import('./source.js').then((data) => {
//         console.log(data.default);
//     });
// });
//
// document.body.appendChild(button);

import str from './source.js';
console.log(str);

if(module.hot) {
    module.hot.accept('./source.js', () => {
        console.log('更新了！');
        let str = require('./source.js');
        console.log(str);
    })
}




