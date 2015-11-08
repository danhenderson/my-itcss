var gulp = require('gulp'),
    sass = require('gulp-sass'),
    minifyCss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    styleguide = require('sc5-styleguide');

var styleguidePath = 'styleguide';

/*
* styles
* compiles our scss files in the src directory and outputs both minified
* and unminified versions to the dist directory
*/
gulp.task('styles', function() {
  gulp.src('./src/**/*.scss')
    .pipe(sass({
      includePaths: [].concat(
        require('node-normalize-scss').includePaths,
        require('node-reset-scss').includePath
      )
    }).on('error', sass.logError))
    .pipe(gulp.dest('./dist'))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifyCss())
    .pipe(gulp.dest('./dist'));
});

/*
* styles:watch
* watch for any changes in our scss files and trigger the styles task
*/
gulp.task('styles:watch', function() {
  gulp.watch('./src/**/*.scss', ['styles']);
});

/*
* styleguide:generate
*/
gulp.task('styleguide:generate', function() {
  return gulp.src('./src/**/*.scss')
    .pipe(styleguide.generate({
        title: 'Styleguide',
        server: true,
        rootPath: styleguidePath,
        overviewPath: 'README.md'
      }))
    .pipe(gulp.dest(styleguidePath));
});

/*
* styleguide:applystyles
*/
gulp.task('styleguide:applystyles', function() {
  return gulp.src('./src/main.scss')
    .pipe(sass({
      errLogToConsole: true,
      includePaths: [].concat(
        require('node-normalize-scss').includePaths,
        require('node-reset-scss').includePath
      )
    }))
    .pipe(styleguide.applyStyles())
    .pipe(gulp.dest(styleguidePath));
});

/*
* styleguide
*/
gulp.task('styleguide', ['styleguide:generate', 'styleguide:applystyles']);
