const gulp = require('gulp');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssvars = require('postcss-simple-vars');
const nested = require('postcss-nested');
const cssImport = require('postcss-import');
const mixins = require('postcss-mixins');

gulp.task('styles', () => {
    return gulp
        .src('./app/assets/styles/styles.css')
        .pipe(postcss([mixins, cssImport, nested, cssvars, autoprefixer]))
        .on('error', function(error) {
            console.log(error.toString());
            this.emit('end');
        })
        .pipe(gulp.dest('./app/temp/styles'));
});
