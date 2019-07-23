const gulp = require('gulp');
const html = require('./html').default;
const css = require('./css').default;
const watch = require('./watch').default;

exports.build = gulp.series(
    html,
    css
);

exports.default = gulp.series(
    exports.build,
    watch
);