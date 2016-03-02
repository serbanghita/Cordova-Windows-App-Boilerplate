var gulp = require("gulp");
var rename = require('gulp-rename');
var fs = require("fs");
var ts = require("gulp-typescript");
var tsc = require('gulp-tsc');
var tslint = require('gulp-tslint');
var es = require('event-stream');
var cordovaBuild = require("taco-team-build");
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var runSequence = require('run-sequence');

// Build config to use for build - Use Pascal case to match paths set by VS
var buildConfig = "Release";

// Arguments for build by platform. Warning: Omit the extra "--" when referencing platform
// specific options (Ex:"-- --gradleArg" is "--gradleArg").
var buildArgs = ["--" + buildConfig.toLocaleLowerCase(), "--device"];

var paths = {
    typescript: {
        tsconfig: "tsconfig.json",
        src: ['src/*.ts'],
        dest: 'www/js-tmp/'
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
    return gulp
        .src(paths.typescript.src)
        .pipe(tsc({
            module: 'commonjs',
            emitError: false
        }))
        .pipe(gulp.dest(paths.typescript.dest));
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

gulp.task('js', function() {
    browserify({debug:true})
        .add('./www/js-tmp/index.js')
        .bundle()
        .pipe(source('./app.js'))
        //.pipe(streamify(uglify()))
        //.pipe(rename('app.js'))
        .pipe(gulp.dest('./www/js/'));
});

// Build Windows, copy the results back to bin folder
gulp.task("build-win", function() {
    return cordovaBuild.buildProject("windows", buildArgs)
        .then(function() {
            return gulp.src(paths.appx).pipe(gulp.dest(paths.binAppx));
        });
});

gulp.task('build', function(done) {
    runSequence('ts:compile', 'js', 'build-win', function() {
        console.log('App built.');
        done();
    });
});


/**
 * Run everything in order.
 */
gulp.task("default", ["build"]);