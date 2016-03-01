"use strict";

/*
  Copyright (c) Microsoft. All rights reserved.  
  Licensed under the MIT license. See LICENSE file in the project root for full license information.
*/
var gulp = require("gulp"),
    fs = require("fs"),
    ts = require("gulp-typescript"),
    es = require('event-stream'),
    cordovaBuild = require("taco-team-build");

// Setup platforms to build that are supported on current hardware
var winPlatforms = ["windows"];
var platformsToBuild = winPlatforms;

// Build config to use for build - Use Pascal case to match paths set by VS
var buildConfig = "Release";

// Arguments for build by platform. Warning: Omit the extra "--" when referencing platform
// specific options (Ex:"-- --gradleArg" is "--gradleArg").
var buildArgs = {
    windows: ["--" + buildConfig.toLocaleLowerCase(), "--device"]
};

// Paths used by build
var paths = {
   tsconfig: "src/tsconfig.json",
   ts: "src/*.ts",
   appx: "./platforms/windows/AppPackages/**/*",
   binAppx: "./bin/Windows/" + buildConfig
};

// Set the default to the build task
gulp.task("default", ["build"]);

// Executes taks specified in winPlatforms, linuxPlatforms, or osxPlatforms based on
// the hardware Gulp is running on which are then placed in platformsToBuild
gulp.task("build",  ["scripts"], function() {
    return cordovaBuild.buildProject(platformsToBuild, buildArgs)
        .then(function() {    
            // ** NOTE: Package not required in recent versions of Cordova
            return cordovaBuild.packageProject(platformsToBuild)
                .then(function() {             
                    return es.concat(
                            gulp.src(paths.appx).pipe(gulp.dest(paths.binAppx)));            
                });
        });
});

// Build Windows, copy the results back to bin folder
gulp.task("build-win", ["scripts"], function() {
    return cordovaBuild.buildProject("windows", buildArgs)
        .then(function() {
            return gulp.src(paths.appx).pipe(gulp.dest(paths.binAppx));            
        });
});

// Typescript compile - Can add other things like minification here
gulp.task("scripts", function () {
    // Compile TypeScript code - This sample is designed to compile anything under the "src" folder using settings
    // in tsconfig.json if present or this gulpfile if not.  Adjust as appropriate for your use case.
    if (fs.existsSync(paths.tsconfig)) {
        // Use settings from src/tsconfig.json
        gulp.src(paths.ts)
            .pipe(ts(ts.createProject(paths.tsconfig)))
            .pipe(gulp.dest("."));
    } else {
        // Otherwise use these default settings
         gulp.src(paths.ts)
            .pipe(ts({
                noImplicitAny: false,
                noEmitOnError: true,
                removeComments: false,
                sourceMap: true,
                module: "es2015",
                outFile: "app.js",
            target: "es5"
            }))
            .pipe(gulp.dest("www/js"));        
    }
});
