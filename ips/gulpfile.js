var gulp = require('gulp');
var webserver = require('gulp-webserver');
gulp.task('default', function () {
    gulp.src('live').pipe(webserver({
        host: '10.131.11.172',
        port: '89',
        path: '/',
        open: true,
        fallback: 'index.html'
    }));
});
