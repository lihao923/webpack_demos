class AsyncPlugin {
    apply(compiler) {
        console.log('222');
        compiler.hooks.emit.tapAsync('AsyncPlugin', (compliation, cb) => {
            setTimeout(()  => {
                console.log('文件发射出来， 等一下！');
                cb();
            }, 100);
        });

        compiler.hooks.emit.tapPromise('AsyncPlugin', (compliation) => {
            return new Promise((resolve, reject) => {
                setTimeout(()  => {
                    console.log('文件发射出来， 等一下 Promise！');
                    resolve();
                }, 100);
            })
        });
    }
}

module.exports = AsyncPlugin;
