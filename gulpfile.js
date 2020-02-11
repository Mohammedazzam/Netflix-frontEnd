var gulp = require('gulp');
var browsersync = require('browser-sync');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var imagemin = require('gulp-imagemin');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');


function styles(){
    return gulp.src('src/scss/styles.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'compressed' })).on('error', sass.logError)
    .pipe(autoprefixer())
    .pipe(sourcemaps.write())
    .pipe(rename('main.min.css'))
    .pipe(gulp.dest('dist/css'))
}
exports.styles = styles;