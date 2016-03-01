# babel-plugin-transform-qq-operator

Compile qq operator to ES5

## Installation

```sh
$ npm install babel-plugin-transform-qq-operator
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["transform-qq-operator"]
}
```

### Via CLI

```sh
$ babel --plugins transform-qq-operator script.js
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  plugins: ["transform-qq-operator"]
});
```
