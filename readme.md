# parookiejs

[![npm](https://img.shields.io/npm/v/parookiejs?label=npm%20version&style=flat-square)](https://www.npmjs.com/package/parookiejs) [![build status](https://img.shields.io/github/workflow/status/EthanMcBloxxer/parookiejs/Node.js?style=flat-square)](https://github.com/EthanMcBloxxer/parookiejs/actions/workflows/node.js.yml)

Parookie.js is an MIT-licensed JavaScript package/script that creates a cookie from every url parameter (`?name=value`) using `URLSearchParams(window.location.search)`

## Installation
browser:
```html
<script src="function.js"></script>
<script>
  cookify(expirationTime, useSessionStorage, whitelist, debug)
</script>
```
npm:
```bash
npm i parookiejs
```
node.js:
```js
var parookie = require('parookie');
```
bower:
```bash
bower install EthanMcBloxxer/parookiejs
```
yarn:
```bash
yarn add parookiejs
```
requirejs:
```js
require({'paths': {'parookie': 'path/to/parookiejs'}}, ['parookiejs'], function(x) {console.log(x);});
```

## API
### `cookify()`
This is the main function for parookie, which converts the url parameters into cookies.
#### `int expirationTime`
In miliseconds, the expiration time of the cookie. Set to `0` to disable and make the cookie permanent. `1`-`1000` is a good option for keeping the cookie on just page load.
#### `bool useSessionStorage`
true: Use `sessionStorage` instead of cookies  
false: Don't impact the script
#### `array whitelist[]`
Add values to this for them to be the only creatable cookies, like `["1", "2"]`. Leave as `[]` to disable.
#### `bool debug`
Log to the console when an event completes
#### Example
```js
require("function.js");
cookify(0, false, [], false);
```
