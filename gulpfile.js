const gulp = require('gulp');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');

const _SOURCE_PATH = './';

gulp.task('styles', function(){

    this.src(_SOURCE_PATH + 'styles/main.sass')
        .pipe(plumber())
        .pipe(sass())
        .pipe(gulp.dest(_SOURCE_PATH + 'public/styles'));
        //.pipe(browserSync.reload({stream: true}));

});

gulp.task('default', ['styles']);