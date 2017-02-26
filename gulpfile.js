const del = require('del');
const gulp = require('gulp');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');

gulp.task('clean', () => {
    return del('dist');
});

gulp.task('build', ['clean'], () => {
    return gulp.src('./index.js')
        .pipe(babel())
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['build']);

module.exports = gulp;
