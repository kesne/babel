# babel-plugin-syntax-qq-operator

Allow parsing of the qq operator.

## Installation

```sh
$ npm install babel-plugin-syntax-qq-operator
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["syntax-qq-operator"]
}
```

### Via CLI

```sh
$ babel --plugins syntax-qq-operator script.js
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  plugins: ["syntax-qq-operator"]
});
```
