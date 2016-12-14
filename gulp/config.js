module.exports = {
    source: {
        js: {
            main: 'app/app.js',
            src: 'app/**/*.js',
            tests: 'app/**/test/*.js'
        },
        tpl: {
            main: 'app/index.html',
            src: 'app/**/*.html'
        },
        sass: {
            bootstrap: 'bower_components/bootstrap-sass/assets/stylesheets',
            src: 'app/**/*.scss'
        },
        json: 'app/**/*.json',
        images: {
            src: 'app/img/*.*',
            favicon: 'app/favicon.ico'
        }
    },
    build: {
        main: 'dist',
        vendor_js: 'dist/bower_components/*.js',
        vendor_css: 'dist/bower_components/*.css',
        vendor_fonts: ['dist/bower_components/*.ttf','dist/bower_components/*.svg','dist/bower_components/*.eot','dist/bower_components/*.woff'],
        offline: 'dist/js/offline.js',
        js: 'dist/js/*.js',
        json: 'dist/json/*.json',
        css: 'dist/css/*.css',
        tpl: 'dist/templates/*.js',
        index: 'dist/index.html'
    },
    docs: {
        main: 'docs/dist',
        readme: 'README.md'
    }
};