var path = require("path");
var fs = require("fs");
var del = require("del");
var gulp = require("gulp");
var shell = require("gulp-shell");
var rename = require("gulp-rename");
var replace = require("gulp-replace");
var cleanCSS = require("gulp-clean-css");
var trim = require("gulp-trim");
gulp.task("clean", function () {
    return del(["rhelement.js", "./**/*.umd.*", "./*.css", "./*.js.map"]);
});
gulp.task("compile", function () {
    return gulp
        .src(["./rhelement.js", "./reveal.js"])
        .pipe(replace(/^(import .*?)(['"]\.\.?\/(?!\.\.\/).*)(\.js['"];)$/gm, "$1$2.umd$3"))
        .pipe(rename({
        suffix: ".umd"
    }))
        .pipe(gulp.dest("./"));
});
gulp.task("copy", function () {
    return gulp.src(["./src/*"]).pipe(gulp.dest("./"));
});
gulp.task("minify-css", function () {
    return gulp
        .src("./src/*.css")
        .pipe(cleanCSS())
        .pipe(rename({
        suffix: ".min"
    }))
        .pipe(gulp.dest("./"));
});
gulp.task("watch", function () {
    return gulp.watch("./src/**/*", gulp.series("build"));
});
gulp.task("bundle", shell.task("../../node_modules/.bin/rollup -c"));
gulp.task("build", gulp.series("clean", "copy", "compile", "minify-css", "bundle"));
gulp.task("default", gulp.series("build"));
gulp.task("dev", gulp.series("build", "watch"));
