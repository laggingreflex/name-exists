# name-exists

Check if a package name is available on npm using an (auto-updating) offline registry [all-the-package-names] to enable checking package names according to [new package moniker rules].

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


[all-the-package-names]: https://github.com/nice-registry/all-the-package-names
[new package moniker rules]: https://blog.npmjs.org/post/168978377570/new-package-moniker-rules


