var gulp = require('gulp'),
	sass = require('gulp-sass'),
	browserSynk = require('browser-sync');

gulp.task('sass', function(){
	return gulp.src('styles/main.scss')
	.pipe(sass())
	.pipe(gulp.dest('styles'))
	.pipe(browserSynk.reload({
		stream: true
	}))
});

gulp.task('browser-sync', function(){
	browserSynk({
		server: {
			baseDir: ''
		},
		notify: false
	})
});
gulp.task('watch', ['browser-sync', 'sass'], function(){
	gulp.watch('styles/main.scss', ['sass']);
	gulp.watch('*.html', browserSynk.reload);
	gulp.watch('js/**/*.js', browserSynk.reload);
});
