# Publier une app #

Lien utile : http://ionicframework.com/docs/guide/publishing.html

#release
    cordova build --release android

## Générer ou utiliser une clé pour l'app ##

### Générer une clé  ###
    keytool -genkey -v -keystore my-release-key.keystore -alias alias_name -keyalg RSA -keysize 2048 -validity 10000

Clé dispo sur google drive  "my-release-key.keystore"

### signer l'application ###

    jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.keystore HelloWorld-release-unsigned.apk alias_name

#zipalign 
A executer dans "C:\Users\baptiste\AppData\Local\Android\sdk\build-tools\20.0.0"

    zipalign 4 HelloWorld-release-unsigned.apk HelloWorld.apk

