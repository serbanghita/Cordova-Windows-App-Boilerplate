var gulp = require("gulp");
var rename = require('gulp-rename');
var fs = require("fs");
var ts = require('gulp-typescript');
var tslint = require('gulp-tslint');
var es = require('event-stream');
var cordovaBuild = require("taco-team-build");
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var runSequence = require('run-sequence');
var rimraf = require('rimraf');

// Build config to use for build - Use Pascal case to match paths set by VS
var buildConfig = "Release";

// Arguments for build by platform. Warning: Omit the extra "--" when referencing platform
// specific options (Ex:"-- --gradleArg" is "--gradleArg").
var buildArgs = ["--" + buildConfig.toLocaleLowerCase(), "--device"];

var paths = {
    typescript: {
        tsconfig: "tsconfig.json",
        src: ['src/**.ts'],
        dest: './www/tmp/'
    },
    javascript: {
        src: 'www/js-tmp/*.js',
        dest: 'www/js-tmp/app.js',
        min: 'www/js-tmp/app.min.js'
    },
    appx: "./platforms/windows/AppPackages/**/*",
    binAppx: "./bin/Windows/" + buildConfig
};

/**
 * TypeScript tasks.
 */

gulp.task('ts:compile', function() {
    var tsProject = ts.createProject('tsconfig.json');
    var tsResult = tsProject.src(paths.typescript.src) // instead of gulp.src(...)
        .pipe(ts(tsProject));
    return tsResult.js.pipe(gulp.dest(paths.typescript.dest));

});

gulp.task('ts:lint', function() {
    return gulp.src(paths.typescript.src)
        .pipe(tslint())
        .pipe(tslint.report('prose', {
            emitError: false
        }));
});

/**
 * JavaScript tasks.
 */

gulp.task('js:browserify', function() {
    return browserify({debug:true})
        .add('./www/tmp/index.js')
        .bundle()
        .pipe(source('./app.js'))
        //.pipe(streamify(uglify()))
        //.pipe(rename('app.js'))
        .pipe(gulp.dest('./www/js/'));
});

gulp.task('js:cleanup', function (cb) {
    return rimraf('./www/tmp', cb);
});

// Build Windows, copy the results back to bin folder
gulp.task("build-win", function() {
    return cordovaBuild.buildProject("windows", buildArgs)
        .then(function() {
            return gulp.src(paths.appx).pipe(gulp.dest(paths.binAppx));
        });
});

gulp.task('build-js', function(done) {
    runSequence('ts:compile', 'js:browserify', 'js:cleanup', function() {
        console.log('JavaScript built.');
        done();
    });
});

gulp.task('build-app', function(done) {
    runSequence('build-js', 'build-win', function() {
        console.log('App built.');
        done();
    });
});


/**
 * Run everything in order.
 */
gulp.task('default', ['build-app']);