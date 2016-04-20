var config = require('../config');
var gulp = require('gulp');
var runSequence = require('run-sequence');

// DEV task which will make clean build and inject all dependencies into index page
// Then run webserver and start syncing/watching files
gulp.task('dev', function(callback) {
    runSequence('clean',
                ['js', 'json','sass','vendor'],
                'inject',
                'sync',
                'watch',
                callback);
});