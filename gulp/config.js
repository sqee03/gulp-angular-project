module.exports = {
    source: {
        js: {
            main: 'app/app.js',
            src: 'app/**/*.js'
        },
        tpl: {
            main: 'app/index.html',
            src: 'app/**/*.html'
        },
        sass: 'app/**/*.scss',
        json: 'app/**/*.json'
    },
    build: {
        main: 'dist',
        vendor_js: 'dist/bower_components/*.js',
        vendor_css: 'dist/bower_components/*.css',
        js: 'dist/js/*.js',
        json: 'dist/jsson/*.json',
        css: 'dist/css/*.css',
        html: 'dist/**/*.html'
    }
};