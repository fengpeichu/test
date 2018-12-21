var gulp = require('gulp');
var sass = require('gulp-sass');
var server = require("gulp-webserver");
console.log(server());
gulp.task('sass', function() {
    return gulp.src('./src/sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./src/css'))
});
gulp.task('watch', function() {
    gulp.watch('./src/sass/*.scss', gulp.series('sass'));
});
gulp.task('server', function() {
    return gulp.src('src')
        .pipe(server({
            port: 9090,
            proxies: [{
                result: '/users/api/read',
                target: 'http://localhost:3000/users/api/read'
            }]
        }))
});
gulp.task('dev', gulp.series('sass', 'server', 'watch'));