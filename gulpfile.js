var gulp = require('gulp');
var bs = require('browser-sync').create(); // create a browser sync instance.

gulp.task('watch', function() {
    bs.init({
        files: "./**/*.{js, html, css}",
        server: { baseDir: "./" },
        https: true
        //proxy: 'https://phaser-card-game.local:443'
    });
});