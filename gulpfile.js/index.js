const gulp = require('gulp');
const html = require('./html').default;
const css = require('./css').default;

exports.build = gulp.series(
    html,
    css
);