// --------------------------------------------
// Dependencies
// --------------------------------------------
var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    del = require('del'),
    minifycss = require('gulp-minify-css'),
    plumber = require('gulp-plumber'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    images = require('gulp-imagemin'),
    browserSync = require('browser-sync').create();


// paths
var styleSrc = 'src/sass/**/*.sass',
    styleDest = 'build/assets/css/',
    htmlSrc = 'src/',
    htmlDest = 'build/',
    vendorSrc = 'src/js/vendors/',
    vendorDest = 'build/assets/js/',
    scriptSrc = 'src/js/*.js',
    scriptDest = 'build/assets/js/';



// --------------------------------------------
// Stand Alone Tasks
// --------------------------------------------


// Compiles all SASS files
gulp.task('sass', function() {
    gulp.src('src/sass/**/*.sass')
    .pipe(sourcemaps.init())
        .pipe(plumber())
        .pipe(sass({
            style: 'compressed'
        }))
        .pipe(rename({
            basename: 'main',
            suffix: '.min'
          }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('build/assets/css'));
});

gulp.task('images', function() {
    gulp.src('src/img/*')
        .pipe(images())
        .pipe(gulp.dest('build/assets/img'));
});

// Uglify js files
gulp.task('scripts', function() {
    gulp.src('src/js/*.js')
        .pipe(plumber())
        .pipe(uglify())
        .pipe(gulp.dest('build/assets/js'));
});

//Concat and Compress Vendor .js files
gulp.task('vendors', function() {
    gulp.src(
            [
                'src/js/vendors/jquery.min.js',
                'src/js/vendors/*.js'
            ])
        .pipe(plumber())
        .pipe(concat('vendors.js'))
        .pipe(uglify())
        .pipe(gulp.dest('build/assets/js'));
});



// Watch for changes
gulp.task('watch', function(){

    // Serve files from the root of this project
    browserSync.init({
        server: {
            baseDir: "./build"
        },
        notify: false
    });

    gulp.watch(styleSrc,['sass']);
    gulp.watch(scriptSrc,['scripts']);
    gulp.watch(vendorSrc,['vendors']);
    gulp.watch(['build/*.html', 'build/assets/css/*.css', 'build/assets/js/*.js', 'build/assets/js/vendors/*.js']).on('change', browserSync.reload);

});


// use default task to launch Browsersync and watch JS files
gulp.task('default', [ 'sass', 'scripts', 'vendors', 'watch'], function () {});
