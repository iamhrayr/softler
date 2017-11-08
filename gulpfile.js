"use strict";
var gulp = require("gulp");
var sass = require("gulp-sass");
var sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');


gulp.task('sass', function () {
  return gulp
    .src('./css/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(autoprefixer({
            browsers: ['last 6 versions'],
            cascade: false
        }))
    .pipe(gulp.dest('./css'));
});


gulp.task('sass:watch', () => {
  	gulp.watch('./css/**/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'sass:watch']);


