<h1 align="center">babel-plugin-replace-code</h1>

<p align="center">
  <a title='License' href="https://raw.githubusercontent.com/FormidableLabs/babel-plugin-replace-code/master/LICENSE">
    <img src='https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square' />
  </a>
  <a href="https://badge.fury.io/js/babel-plugin-replace-code">
    <img src="https://badge.fury.io/js/babel-plugin-replace-code.svg" alt="npm version" height="18">
  </a>
  <a href='http://travis-ci.org/FormidableLabs/babel-plugin-replace-code'>
    <img src='https://secure.travis-ci.org/FormidableLabs/babel-plugin-replace-code.svg?branch=master' />
  </a>
</p>

<h4 align="center">
  Replace code at build-time!
</h4>

<h4 align="center">
  This project was forked from <a href="https://github.com/FormidableLabs/babel-plugin-transform-define">babel-plugin-transform-define</a>
</h4>

***

## Quick Start

```shell
yarn add babel-plugin-replace-code
```

Babel config:

```js
{
  "plugins": [
    ["transform-define", {
      "process.env.NODE_ENV": "\"production\"",
      "process.env.BUILD_INFO": "{ \"date\": " + new Date() + " }",
    }]
  ]
}
```

***

## License

[MIT License](http://opensource.org/licenses/MIT)
