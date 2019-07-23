const gulp = require('gulp');
const html = require('./html').default;
const css = require('./css').default;
const src = 'src/';
const build = 'build/';

function watch(cb) {
    gulp.watch(src + 'html/**/*.html', html);
    gulp.watch(src + 'scss/**/*.scss', css);

    cb();
}

exports.default = watch;