## Webpack Discussion Link

https://github.com/webpack/webpack/discussions/13824#discussion-3467741

<br />
<br />

# Steps to reproduce the same issue

## 1. start your pc and open the terminal

## 2. clone this repository

```shell
$ https://github.com/OptimistLabyrinth/webpack-discussion-13824.git
```

## 3. go into the cloned directory

```shell
$ cd webpack-discussion-13824
```

## 4. isntall npm packages

```shell
$ npm install
```

<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />

# [ 5 - 1 ] running 'Development' mode

## open the whole project using your favorite text editor

```shell
$ code .
```

##  'webpack.config.js' from project root

<br />

#### pay attention to module.exports.output settings.
#### I have 3 cases to test

<br />

## 1. 
 - output.filename = [name].bundle.js
 - publicPath = /dist/

```json
{
  ...
  output: {
    filename: '[name].bundle.js',
    publicPath: contentBaseFolder, // const contentBaseFolder = '/dist/'
    // filename: '[name].[contenthash].js',
    // publicPath: 'auto',
    path: path.join(__dirname, contentBaseFolder),
    clean: true
  },
  ...
}
```

if you run dev-server with this config, everything fine
open your terminal and execute below command

```shell
$ (press CTRL + C on terminal)
$ npm run dev
```

you can check if it works fine on your favorite web browser
open your web browser and type on the address bar: http://127.0.0.1:3080/

<br />

## 2. 
 - output.filename = [name].[contenthash].js
 - publicPath = (auto)

```json
{
  ...
  output: {
    // filename: '[name].bundle.js',
    // publicPath: contentBaseFolder,
    filename: '[name].[contenthash].js',
    publicPath: 'auto',
    path: path.join(__dirname, contentBaseFolder),
    clean: true
  },
  ...
}
```

if you run dev-server with this config, everything fine again
open your terminal and execute below command

```shell
$ (press CTRL + C on terminal)
$ npm run dev
```

you can check if it works fine on your favorite web browser
open your web browser and type on the address bar: http://127.0.0.1:3080/

<br />

## 3. 
 - output.filename = [name].[contenthash].js
 - publicPath = '/dist/'

```json
{
  ...
  output: {
    // filename: '[name].bundle.js',
    // publicPath: contentBaseFolder,
    filename: '[name].[contenthash].js',
    publicPath: contentBaseFolder, // const contentBaseFolder = '/dist/'
    path: path.join(__dirname, contentBaseFolder),
    clean: true
  },
  ...
}
```

if you run dev-server with this config, now you get

## **<404 Error Response>.**

open your terminal and execute below command

```shell
$ (press CTRL + C on terminal)
$ npm run dev
```

you can check the error on your favorite web browser
open your web browser and type on the address bar: http://127.0.0.1:3080/

<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />

# [ 5 - 2 ] running 'Production' mode

## open the whole project using your favorite text editor

```shell
$ code .
```

##  'webpack.prod.js' from project root

<br />

#### pay attention to module.exports.output settings.
#### I have 3 cases to test

<br />

## 1. 
 - output.filename = [name].bundle.js
 - publicPath = /prod/

```json
{
  ...
  output: {
    filename: '[name].bundle.js',
    publicPath: contentBaseFolder, // const contentBaseFolder = '/prod/'
    // filename: '[name].[contenthash].js',
    // publicPath: '/',
    path: path.join(__dirname, contentBaseFolder),
    clean: true
  },
  ...
}
```

if you run dev-server with this config, everything fine
open your terminal and execute below command

```shell
$ (press CTRL + C on terminal)
$ npm run dev
```

you can check if it works fine on your favorite web browser
open your web browser and type on the address bar: http://127.0.0.1:3080/

<br />

## 2. 
 - output.filename = [name].[contenthash].js
 - publicPath = '/'

```json
{
  ...
  output: {
    // filename: '[name].bundle.js',
    // publicPath: contentBaseFolder,
    filename: '[name].[contenthash].js',
    publicPath: '/',
    path: path.join(__dirname, contentBaseFolder),
    clean: true
  },
  ...
}
```

if you run dev-server with this config, everything fine again
open your terminal and execute below command

```shell
$ (press CTRL + C on terminal)
$ npm run dev
```

you can check if it works fine on your favorite web browser
open your web browser and type on the address bar: http://127.0.0.1:3080/

<br />

## 3. 
 - output.filename = [name].[contenthash].js
 - publicPath = '/prod/'

```json
{
  ...
  output: {
    // filename: '[name].bundle.js',
    // publicPath: contentBaseFolder,
    filename: '[name].[contenthash].js',
    publicPath: contentBaseFolder, // const contentBaseFolder = '/prod/'
    path: path.join(__dirname, contentBaseFolder),
    clean: true
  },
  ...
}
```

if you run dev-server with this config, now you get 

## **<404 Error Response>.**

open your terminal and execute below command

```shell
$ (press CTRL + C on terminal)
$ npm run dev
```

you can check the error on your favorite web browser
open your web browser and type on the address bar: http://127.0.0.1:3080/
