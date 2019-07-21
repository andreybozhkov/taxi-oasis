const gulp = require('gulp');
const html = require('./html').default;

exports.build = gulp.series(
    html
);