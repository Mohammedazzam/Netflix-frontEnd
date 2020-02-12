var gulp = require('gulp');
var browsersync = require('browser-sync');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var imagemin = require('gulp-imagemin');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');


async function styles(){
    return gulp.src('src/scss/styles.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'compressed' })).on('error', sass.logError)
    .pipe(autoprefixer())
    .pipe(sourcemaps.write())
    .pipe(rename('main.min.css'))
    .pipe(gulp.dest('dist/css'))
}

async function bootstrap_styles(){
    return gulp.src('src/bootstrap/bootstrap.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'compressed' })).on('error', sass.logError)
    .pipe(autoprefixer())
    .pipe(sourcemaps.write())
    .pipe(rename('bootstrap.min.css'))
    .pipe(gulp.dest('dist/css'))
}

async function watch() {
    gulp.watch('src/scss/**/*.scss',styles);  
    gulp.watch('src/bootstrap/**/*.scss',bootstrap_styles) 
}


// exports.styles = styles;
// exports.bootstrap_styles = bootstrap_styles;

exports.default=gulp.series( //function لكل  exportsهذا عبارة عن كود مختصر بدل ما بضل أعمل 
    styles,
    bootstrap_styles,
    watch
)
    