# md-file-tree by [@michalbe](http://github.com/michalbe)

Generate markdown tree of all the files in a directory, recursively.

## How to use?

### Install the script

```bash
$ npm install md-file-tree -g
```

### Run the tree script in any directory

```bash
$ md-file-tree
```

### Enable emoji (📂 & 📄) with the command line switch

```bash
$ md-file-tree --emoji
$ md-file-tree -e
```

### Redirect the output to a file

```bash
$ md-file-tree > list.md
```

This generates the `list.md` file with:

```markdown
- __michal__
  - [LICENSE](LICENSE)
  - [README.md](README.md)
  - __bin__
    - [cli.js](bin/cli.js)
  - [michal.png](michal.png)
  - [node\_modules](node_modules)
  - [npm\-debug.log](npm-debug.log)
  - [package.json](package.json)
  - [screen.png](screen.png)
  - __scripts__
    - [assert.js](scripts/assert.js)
    - [fancom.js](scripts/fancom.js)
    - [jshintrc.js](scripts/jshintrc.js)
    - [package\-json.js](scripts/package-json.js)
    - [precommit\-hook.js](scripts/precommit-hook.js)
    - [scripts.js](scripts/scripts.js)
    - [tests.js](scripts/tests.js)
  - __tests__
    - [michal\-tests.js](tests/michal-tests.js)
```

## Hidden files & directories

Please note that this script __skips__ all hidden files and directories (with `.`, like `.git` or `.gitignore`) &
 the contents of the `node_modules` directory.
