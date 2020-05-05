// console.log('hello loader!');
// -! 不会让文件再去通过pre + normal loader来处理了
// ! 没有normal
// !! 什么都不要
// let str = require('!!inline-loader!./a.js');

// loader默认是由两部分组成 pitch normal

// class ZF {
//     constructor() {
//         this.name = 'zf'
//     }
//
//     getName() {
//         return this.name;
//     }
// }
//  let zf = new ZF();
// console.log(zf.getName());

import p from './3.png';
let img = document.createElement('img');
img.src = p;
document.body.appendChild(img);

import './index.less';












