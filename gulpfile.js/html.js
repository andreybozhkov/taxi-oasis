const gulp = require('gulp');
const htmlclean = require('gulp-htmlclean');
const src = 'src/';
const build = 'build/';

function htmlIndex () {
    const out = build;

    return gulp.src(src + '*.html')
        .pipe(htmlclean())
        .pipe(gulp.dest(out));
}

function htmlRest () {
    const out = build + 'html/';

    return gulp.src(src + 'html/**/*.html')
        .pipe(htmlclean())
        .pipe(gulp.dest(out));
}

exports.default = gulp.series(htmlIndex, htmlRest);