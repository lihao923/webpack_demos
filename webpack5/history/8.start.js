let { AsyncSeriesHook } = require('tapable');
// 异步的钩子（串行）并行，需要等待所有并发的异步事件执行后再执行回调方法
// 同时发送多个请求
// 注册方法 分为tap注册 tapAsync注册
// tapable库中有三种注册方法 tap注册同步注册， tapAsync(cb) tapPromise(注册的是promise)
// call  callAsync  promise

class Lesson {
    constructor() {
        this.index = 0;
        this.hooks = {
            arch: new AsyncSeriesHook(['name'])
        }
    }
    tap() { // 注册监听函数
        this.hooks.arch.tapPromise('node', (name) => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    console.log('node', name);
                    resolve();
                }, 1000);
            });
        });
        this.hooks.arch.tapPromise('react', (name) => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    console.log('react', name);
                    resolve();
                }, 1000);
            });
        });
    }
    start() {
        this.hooks.arch.promise('lihao').then(() => {
            console.log('end!');
        })
    }
}
let l = new Lesson();
l.tap(); // 注册这两个事件
l.start(); // 启动钩子


