const browserSync = require('browser-sync').create();

function bSync(cb) {
    browserSync.init({
        server: {
            baseDir: './build'
        }
    });
    
    cb();
}

function reloader(cb) {
    browserSync.reload();
    cb();
}

exports.reloader = reloader;
exports.default = bSync;