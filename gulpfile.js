var gulp = require('gulp');
var cleanPublic = require('gulp-clean');
var copyImg = require('gulp');
var sass = require('gulp-sass');
var rename = require("gulp-rename");
var clean = require("gulp-clean");



gulp.task('cleanPublic', function() {

    return gulp.src('public/assets/img/', {read: false})
        .pipe(clean());
});

gulp.task('copyImg', ['cleanPublic'], function() {

    return gulp.src('src/assets/img/*')
        .pipe(gulp.dest('public/assets/img/'));
});

gulp.task('sass', ['copyImg'], function () {
    return gulp.src('src/assets/sass/purestrap.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('public/assets/'));
});

gulp.task('rename', ['sass'], function () {
    return gulp.src("public/assets/purestrap.css")
        .pipe(rename("public/assets/style.css"))
        .pipe(gulp.dest(""));

});

gulp.task('clean', ['rename'], function () {
    return gulp.src('public/assets/purestrap.css', {read: false})
        .pipe(clean());
});



gulp.task('default', ['cleanPublic', 'copyImg', 'sass',
                        'rename', 'clean']);