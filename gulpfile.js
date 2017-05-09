const gulp = require('gulp');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const jshint = require('gulp-jshint');

const uglify = require('gulp-uglify');
const cssnano = require('gulp-cssnano');
const imagemin = require('gulp-imagemin');

const SOURCE_PATH = './';


/* ====================
 SET all tasks
 ======================== */


gulp.task('styles', styles);

gulp.task('watcher', watcher);

gulp.task('default', ['styles', 'watcher']);


/* ====================
 Task functions
 ======================== */

function watcher() {

    gulp.watch(SOURCE_PATH + 'styles/**/*.{sass, scss}', {cwd: SOURCE_PATH}, ['styles']);

    //gulp.watch(SOURCE_PATH + 'scripts/main.js', {cwd: SOURCE_PATH}, ['lint']);

    //gulp.watch('app/pug/*.pug', {cwd: src}, ['views']);

}

// function scripts() {
//
//     return gulp.src(SOURCE_PATH + 'scripts/main.js')
//         .pipe(jshint())
//         .pipe(jshint.reporter('default'))
//         .pipe(gulp.dest(SOURCE_PATH + 'public/scripts'));
//
// }

function styles() {

    this.src(SOURCE_PATH + 'styles/main.sass')
        .pipe(plumber())
        .pipe(sass())
        .pipe(gulp.dest(SOURCE_PATH + 'public/styles'));

}




