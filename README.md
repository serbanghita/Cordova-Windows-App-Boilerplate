# Generic Cordova App for Windows

[![Build Status](https://travis-ci.org/serbanghita/myCordovaWindowsApp.svg?branch=master)](https://travis-ci.org/serbanghita/myCordovaWindowsApp)
[![Build status](https://ci.appveyor.com/api/projects/status/oc1shclrsd9k9fk1?svg=true)](https://ci.appveyor.com/project/serbanghita/mycordovawindowsapp)

#### Configuration rules

* Add plugins in `config.xml` [1]
* Add custom build rules to `.travis.yml`
* See `cordova-windows` [2] project for additional inspiration.
* Do not commit `plugins/fetch.json` [3] in the project.

#### Typings for Cordova plugins

```
typings install 'github:DefinitelyTyped/DefinitelyTyped/cordova/plugins/BatteryStatus.d.ts#ac7f83bdcf1dfd70e70acf7a87cf8e83719dacd6' --save --ambient
typings install 'github:DefinitelyTyped/DefinitelyTyped/cordova/plugins/Camera.d.ts#ac7f83bdcf1dfd70e70acf7a87cf8e83719dacd6' --save --ambient
typings install 'github:DefinitelyTyped/DefinitelyTyped/cordova/plugins/Contacts.d.ts#ac7f83bdcf1dfd70e70acf7a87cf8e83719dacd6' --save --ambient
typings install 'github:DefinitelyTyped/DefinitelyTyped/cordova/plugins/Device.d.ts#ac7f83bdcf1dfd70e70acf7a87cf8e83719dacd6' --save --ambient
typings install 'github:DefinitelyTyped/DefinitelyTyped/cordova/plugins/DeviceMotion.d.ts#ac7f83bdcf1dfd70e70acf7a87cf8e83719dacd6' --save --ambient
typings install 'github:DefinitelyTyped/DefinitelyTyped/cordova/plugins/DeviceOrientation.d.ts#ac7f83bdcf1dfd70e70acf7a87cf8e83719dacd6' --save --ambient
typings install 'github:DefinitelyTyped/DefinitelyTyped/cordova/plugins/Dialogs.d.ts#ac7f83bdcf1dfd70e70acf7a87cf8e83719dacd6' --save --ambient
typings install 'github:DefinitelyTyped/DefinitelyTyped/cordova/plugins/FileSystem.d.ts#ac7f83bdcf1dfd70e70acf7a87cf8e83719dacd6' --save --ambient
typings install 'github:DefinitelyTyped/DefinitelyTyped/cordova/plugins/FileTransfer.d.ts#ac7f83bdcf1dfd70e70acf7a87cf8e83719dacd6' --save --ambient
typings install 'github:DefinitelyTyped/DefinitelyTyped/cordova/plugins/Globalization.d.ts#ac7f83bdcf1dfd70e70acf7a87cf8e83719dacd6' --save --ambient
typings install 'github:DefinitelyTyped/DefinitelyTyped/cordova/plugins/InAppBrowser.d.ts#ac7f83bdcf1dfd70e70acf7a87cf8e83719dacd6' --save --ambient
typings install 'github:DefinitelyTyped/DefinitelyTyped/cordova/plugins/Media.d.ts#ac7f83bdcf1dfd70e70acf7a87cf8e83719dacd6' --save --ambient
typings install 'github:DefinitelyTyped/DefinitelyTyped/cordova/plugins/MediaCapture.d.ts#ac7f83bdcf1dfd70e70acf7a87cf8e83719dacd6' --save --ambient
typings install 'github:DefinitelyTyped/DefinitelyTyped/cordova/plugins/NetworkInformation.d.ts#ac7f83bdcf1dfd70e70acf7a87cf8e83719dacd6' --save --ambient
typings install 'github:DefinitelyTyped/DefinitelyTyped/cordova/plugins/Push.d.ts#ac7f83bdcf1dfd70e70acf7a87cf8e83719dacd6' --save --ambient
typings install 'github:DefinitelyTyped/DefinitelyTyped/cordova/plugins/Splashscreen.d.ts#ac7f83bdcf1dfd70e70acf7a87cf8e83719dacd6' --save --ambient
typings install 'github:DefinitelyTyped/DefinitelyTyped/cordova/plugins/StatusBar.d.ts#ac7f83bdcf1dfd70e70acf7a87cf8e83719dacd6' --save --ambient
typings install 'github:DefinitelyTyped/DefinitelyTyped/cordova/plugins/Vibration.d.ts#ac7f83bdcf1dfd70e70acf7a87cf8e83719dacd6' --save --ambient
typings install 'github:DefinitelyTyped/DefinitelyTyped/cordova/plugins/WebSQL.d.ts#ac7f83bdcf1dfd70e70acf7a87cf8e83719dacd6' --save --ambient
typings install 'github:DefinitelyTyped/DefinitelyTyped/cordova/plugins/Keyboard.d.ts#ac7f83bdcf1dfd70e70acf7a87cf8e83719dacd6' --save --ambient
```

[1]:http://phonegap.com/blog/2015/11/19/config_xml_changes_part_two/
[2]:https://github.com/apache/cordova-windows
[3]:http://stackoverflow.com/questions/30285200/what-is-the-purpose-of-fetch-json-file-inside-cordova-plugins-folder
