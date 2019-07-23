const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const sourcemaps = require('gulp-sourcemaps');
const src = 'src/';
const build = 'build/';

sass.compiler = require('node-sass');

function css () {
    const out = build + 'css/';

    return gulp.src(src + 'scss/style.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([cssnano()]))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(out))
}

exports.default = css;