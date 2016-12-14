var config = require('../config'),
    gulp = require('gulp'),
    angularFilesort = require('gulp-angular-filesort'),
    order = require('gulp-order');
    inject = require('gulp-inject');
    es = require('event-stream');

gulp.task('inject', function () {
    var target = gulp.src(config.source.tpl.main);
    var vendor_js = gulp.src(config.build.vendor_js)
                    .pipe(order([
                        'angular.js',
                        'jquery.js',
                        '*.js'
                    ]))
    var vendor_css = gulp.src(config.build.vendor_css, {read: false});
    var offline_js = gulp.src(config.build.offline, {read: false});
    var sources_json = gulp.src(config.build.json, {read: false});
    var sources_js = gulp.src([config.build.js, '!'+config.build.offline])
                    .pipe(angularFilesort());
    var sources_css = gulp.src(config.build.css, {read: false});
    var templates = gulp.src(config.build.tpl, {read: false});

  return target
    .pipe(gulp.dest('dist')) // write first to get relative path for inject
    .pipe(inject(offline_js, {relative: true, name: 'offline'}))
    .pipe(inject(es.merge(
        vendor_js,
        vendor_css
    ), {relative: true, name: 'bower'}))
    .pipe(inject(es.merge(
        sources_js,
        templates,
        sources_json,
        sources_css
    ), {relative: true}))
    .pipe(gulp.dest('dist'));
});