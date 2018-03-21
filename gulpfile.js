const gulp = require('gulp')
const browserSync = require('browser-sync').create()

gulp.task('default', function () {
    browserSync.init({
        server: {
            baseDir: __dirname + "/src"
        }
    })

    gulp.watch('./src/**').on('change', browserSync.reload)
})