module.exports = function () {
    $.gulp.task('img:dev',function () {
    	return $.gulp.src('src/static/img/*.{png,jpg,gif}')
            .pipe($.gulp.dest('build/static/img/'));
    });

    $.gulp.task('img:build',function () {
    	return $.gulp.src('src/static/img/*.{png,jpeg,gif}')
            .pipe($.gp.tinypng('A_WoJmKtWP6Rv3d20MSwWvKsXv822CIl'))
            .pipe($.gulp.dest('build/static/img/'));
    });
}
