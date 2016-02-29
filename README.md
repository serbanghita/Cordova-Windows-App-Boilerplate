# Generic Cordova App for Windows

[![Build Status](https://travis-ci.org/serbanghita/myCordovaWindowsApp.svg?branch=master)](https://travis-ci.org/serbanghita/myCordovaWindowsApp)

#### Configuration rules

* Add plugins in `config.xml` [1]
* Add custom build rules to `.travis.yml`
* See `cordova-windows` [2] project for additional inspiration.
* Do not commit `plugins/fetch.json` [3] in the project.

[1]:http://phonegap.com/blog/2015/11/19/config_xml_changes_part_two/
[2]:https://github.com/apache/cordova-windows
[3]:http://stackoverflow.com/questions/30285200/what-is-the-purpose-of-fetch-json-file-inside-cordova-plugins-folder