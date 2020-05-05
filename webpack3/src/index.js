// import jquery from 'jquery';
// import moment from 'moment';
// import 'moment/locale/zh-cn' // 手动引入所需要的语言
// // 设置语言
// moment.locale('zh-cn');
//
// let r = moment().endOf('day').fromNow();
// console.log(r);

// import React from 'react';
// import { render } from 'react-dom';
// render(<h1>jsx123</h1>, window.root);

// tree-shaking 没用到的代码，会自动删除掉
// import calc  from './test.js'; // import 在生产环境下会自动去除掉没用的代码
// let calc = require('./test.js'); // require会把结果放到default上 不支持tree-shaking
// console.log(calc.default.sum(1, 2));

import './a.js';
import './b.js';
import $ from 'jquery';

console.log($);
console.log('index.js');

