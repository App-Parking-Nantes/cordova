# Installer et Configurer Cordova #

Création de projet Android ou iOS. Le principe est relativement simple : créer une application qui ouvre une Webview contenant vos fichiers HTML. Cette Webview permet tout de même d'accéder à certaines API du téléphone comme l'accéléromètre, la boussole…


## Installation de Node.js ##

Lien: [https://nodejs.org/](https://nodejs.org/ "https://nodejs.org/")

1. Télécharger NodeJs en cliquant sur le bouton "INSTALL"
2. Installer NodeJS ( Ajouter au PATH )


## Installation de Cordova ##
1. Ouvrir le terminal
2. `npm install -g cordova` => Environ 5,10 minutes
3. cordova --version => Permet de vérifier que cordova est bien installer


## Création d'un projet Cordova ##

1. Créer un dossier pour votre projet 
2. Se déplacer dans ce dossier 
3. `cordova create Parking fr.domaine.app Parking`


Cette commande va créer votre nouveau dossier avec un sous dossier www contenant vos fichiers HTML, CSS et Javascript. Ce sont ces fichiers que vous pourrez modifier pour créer votre application. Ensuite il faut ajouter une plateforme (depuis le dossier qui vient d'être créée)


## Compiler votre application ##

### Android ###
#### Téléchargement #####

Lien: [http://www.oracle.com/technetwork/java/javase/downloads/index.html](http://www.oracle.com/technetwork/java/javase/downloads/index.html "http://www.oracle.com/technetwork/java/javase/downloads/index.html")

1. Télécharger le Java [JDK](http://www.oracle.com/technetwork/java/javase/downloads/index.html) 
2. Télécharger le [SDK Android](http://developer.android.com/sdk/index.html#Other) 
3. Télecharger [Apache Ant](http://ant.apache.org/bindownload.cgi)


#### Installation #####

1. Installer Java Development Kit 
2. Ajouter ensuite le dossier bin du jdk dans le PATH de votre environnement. Pour éviter les problèmes par la suite vous pouvez aussi créer une nouvelle variable d'environnement JAVA_HOME pointant vers la racine du dossier jdk:
	- Ce PC => Propriétés => Paramètres système avancés => Variable d'environnement
	- Ajouter dans la variable PATH `C:\Program Files\Java\jdkx.x.x_xx\bin`
	- Fermer les consoles ouvertes
	- Tester son installation `java -help` => OK si message 
3. Installer le SDK Android 
4. Ajouter les dossiers tools et platform-tools au PATH:  
	- Ce PC => Propriétés => Paramètres système avancés => Variable d'environnement
	- Ajouter dans la variable PATH `C:\Users\xxxxx\AppData\Local\Android\sdk\platform-tools`
	- Ajouter dans la variable PATH `C:\Users\xxxxx\AppData\Local\Android\sdk\tools`
	- Fermer les consoles ouvertes
	- Tester son installation `android --help` => OK si message
5. Dézipper Apache Ant 
6. Ajouter Apache Ant au PATH:  
	- Ce PC => Propriétés => Paramètres système avancés => Variable d'environnement
	- Ajouter dans la variable PATH `X:\xxx\xxxx\apache-ant-1.9.4\bin` 
	- Fermer les consoles ouvertes
	- Tester son installation `ant --help` => OK si message
 

#### Ajouter une plateforme ####

1. Se déplacer dans le dossier de votre projet
2. `cordova platforms add android`



#### Copier le projet web Android ####

1. Copier le projet "Parking Web" dans le dossier un nouveau dossier "parking" dans "www" de votre projet cordova
2. Remplacer dans app.js le lien des vues:
	1. templateUrl: 'view/viewMaps.html' par templateUrl: 'parking/view/viewMaps.html',
	2. templateUrl :'view/viewList.html', par templateUrl :'parking/view/viewList.html',

#### Compiler ####

1. `cordova build android`
2. `cordova run android`
3. l'apk se situe dans "Parking\platforms\android\ant-build"



















