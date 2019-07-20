const gulp = require('gulp');
const devBuild = (process.env.NODE_ENV !== 'production');
const src = '../src/';
const build = '../build/';

exports.default = (cb) => {
    console.log('Gulp works!');
    cb();
}