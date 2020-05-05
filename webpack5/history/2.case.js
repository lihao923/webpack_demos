// class SyncHook { // 同步钩子
//     constructor(args) { // args => ['name']
//         this.tasks = [];
//     }
//     tap(name, task) {
//         this.tasks.push(task);
//     }
//     call(...args) {
//         this.tasks.forEach((task) => task(...args));
//     }
// }
//
// let hook = new SyncHook(['name']);
// hook.tap('react', function(name) {
//     console.log('react', name);
// });
// hook.tap('node', function(name) {
//     console.log('node', name);
// });
//
// hook.call('lihao');

class SyncBailHook { // 同步钩子
    constructor(args) { // args => ['name']
        this.tasks = [];
    }
    tap(name, task) {
        this.tasks.push(task);
    }
    call(...args) {
        let ret; // 当前这个函数的返回值
        let index = 0; // 当前要执行第一个
        do {
            ret = this.tasks[index++](...args)
        } while(ret === undefined && index < this.tasks.length);
    }
}

let hook = new SyncBailHook(['name']);
hook.tap('react', function(name) {
    console.log('react', name);
    return '停止向下执行！';
});
hook.tap('node', function(name) {
    console.log('node', name);
});

hook.call('lihao');





