<h1 align="center"> Be the hero - Mobile (Frontend) </h1>

<p align="center"> This is my personal implementation of the app be-the-hero from the omnistack 11
make by  <a href="https://rocketseat.com.br/"> rocketseat. </a></p>

## Screenshots

![Preview-screenshots](https://github.com/rafaelcascalho/be-the-hero-mobile/blob/master/screenshots.png)

## Download de APK

For simplicity reasons the app was not published but an apk was generated.
To use the app just [donwload it here](https://drive.google.com/file/d/1et2b5Eze7JKkvaUJ-8KduFQKKHDMF9i3/view?usp=sharing) and install in your android device.

## :books: Documentation :books:

Here is a link to the [project docs.](https://trello.com/b/UWFHM6CK/omnistack11-be-the-hero)

## Getting Started

### Prerequisites

#### :warning: Required :warning:

Node current LTS
To install `node` and `npm` just [download it here]() or [follow this tutorial](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).
To check the version run the command

```
$ node -v
v12.16.1
```

Yarn version 1.22.4 or npm (latest is advised)
To install `yarn` just follow [their docs](https://classic.yarnpkg.com/en/docs/install/#debian-stable)
To check the version run the command

```
$ yarn -v
1.22.4
```

Expo version 3.18.6
You can install `expo` following [their docs](https://docs.expo.io/get-started/installation/).
To check the version run the command

```
$ expo -V
3.18.6
```

### Instalation

Clone the repository

```
$ git clone https://github.com/rafaelcascalho/be-the-hero-mobile.git

$ cd be-the-hero-mobile
```

Install the dependencies

```
$ yarn install
```

If you use npm, just exchange the word `yarn` for `npm`.

### Running the project

To check the app in your phone in `development` install the [expo app](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en) in your android phone.
Then, run the command

```
yarn start
```

And wait for the webpage with the QRCode. Once it appears, just open the `expo app` on your phone, and read the QRCode.
At this poing you should be able to see it, and the app will show the splash screen.
For simplicity reasons, the app connect to the `backend` deployed at `heroku`, which may be a little slow in some moments.

## Built With

- [React Native](https://reactjs.org/) - Mobile JavaScript Framework
- [React Navigation](https://reactnavigation.org/) - Internal app navigation module
- [React Native Dotenv](https://github.com/zetachang/react-native-dotenv) - Dotenv variables loader
- [Mail Composer](https://docs.expo.io/versions/latest/sdk/mail-composer/) - Mail sender service for expo
- [Linking](https://reactnative.dev/docs/linking) - React Native tool for deep linking
- [Expo Constants](https://docs.expo.io/versions/latest/sdk/constants/) - Constants for styling elements
- [Expo Vector Icons](https://expo.github.io/vector-icons/) - Icons Library
- [INTL](https://www.npmjs.com/package/intl) - Internalization formatter
- [Prettier](https://prettier.io/) - Code formatter
- [Editorconfig](https://editorconfig.org/) - Code style enforcer
- [Axios](https://github.com/axios/axios) - HTTP Client
