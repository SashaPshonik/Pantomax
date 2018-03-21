module.exports = function() {
    $.gulp.task('img:dev', () => {
        return $.gulp.src('./dev/img/**/*.{png,jpg,gif}')
            .pipe($.gulp.dest('./build/img/'));
    });

    $.gulp.task('img:build', () => {
        return $.gulp.src('./dev/img/**/*.{png,jpg,gif}')
            .pipe($.gp.tinypng('v-efLOX39JcXwyPmwiCpewiXNYGC-CJb'))
            .pipe($.gulp.dest('./build/img/'));
    });


    $.gulp.task('svg:copy', () => {
        return $.gulp.src('./dev/img/svg/*.svg')
            .pipe($.gulp.dest('./build/img/svg/'));
    });
};
