# scratch-app
For packaging scratch to execution file (Windows, macOS) using electron

## Prerequisites

    $ npm install -g electron-packager
    $ npm install --save-dev electron


## Build for macOS

    $ electron-packager . --overwrite --platform=darwin --arch=x64 --icon=./assets/icons/edubot_icon.icns --prune=true --out=release-builds


## Build for Windows

    $ electron-packager . scratch-edubot-app --overwrite --platform=win32 --arch=x64 --icon=assets/icons/edubot_icon.ico --prune=true --out=release-builds --version-string.CompanyName="OROCA" --version-string.FileDescription="OROCA Edubot" --version-string.ProductName="Scratch Edubot"