
class AsyncSeriesHook { // 同步钩子
    constructor(args) { // args => ['name']
        this.tasks = [];
    }
    tapAsync(name, task) {
        this.tasks.push(task);
    }
    callAsync(...args) {
        let finalCallback = args.pop();
        let index = 0;
        let next = () => {
            if(this.tasks.length === index) {
                return finalCallback();
            }
            let task = this.tasks[index++];
            task(...args, next);
        };
        next();
    }
}

let hook = new AsyncSeriesHook(['name']);
hook.tapAsync('react', function(name, cb) {
    setTimeout(() => {
        console.log('react', name);
        cb();
    }, 1000);
});
hook.tapAsync('node', function(name, cb) {
    setTimeout(() => {
        console.log('node', name);
        cb();
    }, 1000);
});

hook.callAsync('lihao', function() {
    console.log('end!');
});

// AsyncParallelBailHook() // 带保险的异步并发钩子

