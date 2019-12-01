# name-exists

Check if a package name is available on npm


## Install

```
npm i -g name-exists
```

## Usage

### CLI

```
name-exists <package-name>
```

### Node

```
const nameExists = require('name-exists')
if (!nameExists('package-name')) {
  console.log(`No package similar to 'package-name' found`);
}
```
