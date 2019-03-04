const gulp =require('gulp');
const rename = require("gulp-rename");
const sass=require('gulp-sass');
const browserSync=require('browser-sync').create();

function style(){
    //Where is my scss
    return gulp.src('./src/**/*.scss')
    //pass that file through sass compiler
    .pipe(rename("./style.min.css"))
    // .pipe(sass())
     .pipe(sass().on('error',sass.logError))
    // where do I save compiled scss
    .pipe(gulp.dest("./dist"))
    // Stream changes to all browsers
  .pipe(browserSync.stream());
    //Once css is written it will stream to all different browsers



}
function watch(){
    
    //watch for changes and update things automatically for us
    browserSync.init({
        server:{
            baseDir:'./'
        }
    });
    gulp.watch('./scss/**/*.scss',style);
    gulp.watch('./*.html').on('change',browserSync.reload);
    gulp.watch('./js/**/*.js',style).on('change',browserSync.reload);
}
exports.style=style;
exports.watch=watch;
