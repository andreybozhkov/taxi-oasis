const gulp = require('gulp');
const html = require('./html').default;
const css = require('./css').default;
const bSync = require('./browser-sync');
const src = 'src/';

function watch(cb) {
    gulp.watch([src + '*.html', src + 'html/**/*.html'], gulp.series(html, bSync.reloader));
    gulp.watch(src + 'scss/**/*.scss', gulp.series(css, bSync.reloader));

    cb();
}

exports.default = gulp.series(
    bSync.default,
    watch
);