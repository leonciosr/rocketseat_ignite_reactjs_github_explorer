# Unable to install node-sass 
```sh
npm config set strict-ssl false
npm config set registry "http://registry.npmjs.org/"
npm install --global windows-build-tools

# set Node.js header location
npm config set nodedir "C:\Program Files\nodejs\headers"
# set the Python version
npm config set python "<userdir>\AppData\Local\Programs\Python\Python27"
# set the Visual Studio version
npm config set msvs_version 2017
```

- Uninstall node-sass
```sh
npm uninstall node-sass 
```
- Delete package-lock.json
- Clean the cache
```sh
npm cache clean --force
```
Then do 
```sh
npm update
npm install
npm update
```
- Then again try to install node sass
```sh
npm install node-sass
```

If this doesn't work, Try to rebuild node-sass:
```sh
npm rebuild node-sass
```