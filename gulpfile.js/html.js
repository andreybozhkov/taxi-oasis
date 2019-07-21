const gulp = require('gulp');
const newer = require('gulp-newer');
const htmlclean = require('gulp-htmlclean');
const src = 'src/';
const build = 'build/';

function html () {
    const out = build + 'html/';

    return gulp.src(src + 'html/**/*.html')
        .pipe(newer(out))
        .pipe(htmlclean())
        .pipe(gulp.dest(out));
}

exports.default = html;