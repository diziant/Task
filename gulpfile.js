'use strict';

global.$ = {
	gulp: require('gulp'),
	gp: require('gulp-load-plugins')(),
	bs: require('browser-sync').create(),
	path: {
		tasks: require('./gulp/config/tasks.js')
	}
};

$.path.tasks.forEach(function (taskPath) {
	require(taskPath)();
});

$.gulp.task('default',$.gulp.series(
	$.gulp.parallel('pug','sass','scripts:lib','scripts','img:dev','fonts'),
	$.gulp.parallel('watch','serve')
));

$.gulp.task('build',$.gulp.series(
	$.gulp.parallel('pug','sass','scripts:lib','scripts','img:build','fonts'),
	$.gulp.parallel('watch','serve')
));
