let { AsyncSeriesWaterfallHook } = require('tapable');
// 异步的钩子（串行）并行，需要等待所有并发的异步事件执行后再执行回调方法
// 同时发送多个请求
// 注册方法 分为tap注册 tapAsync注册
// tapable库中有三种注册方法 tap注册同步注册， tapAsync(cb) tapPromise(注册的是promise)
// call  callAsync  promise

class Lesson {
    constructor() {
        this.index = 0;
        this.hooks = {
            arch: new AsyncSeriesWaterfallHook(['name'])
        }
    }
    tap() { // 注册监听函数
        this.hooks.arch.tapAsync('node', (name, cb) => {
            setTimeout(() => {
                console.log('node', name);
                cb(null, 'result');
            }, 1000);
        });
        this.hooks.arch.tapAsync('react', (data, cb) => {
            setTimeout(() => {
                console.log('node', data);
                cb();
            }, 1000);
        });
    }
    start() {
        this.hooks.arch.callAsync('lihao', function() {
            console.log('end!');
        })
    }
}
let l = new Lesson();
l.tap(); // 注册这两个事件
l.start(); // 启动钩子


