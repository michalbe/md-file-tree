# md-file-tree by [@michalbe](http://github.com/michalbe) #
Generate markdown list of all the files in a directory.

### How to use? ###
Install with:
```bash```
 $ npm install md-file-tree -g
```

Then in any dir
```bash
$ md-file-tree > list.md
```

generated `list.md` file:

```markdown
- __michal__
  - [.fancom](michal/.fancom)
  - [.git](michal/.git)
  - [.gitignore](michal/.gitignore)
  - [.jshintignore](michal/.jshintignore)
  - [.jshintrc](michal/.jshintrc)
  - [LICENSE](michal/LICENSE)
  - [README.md](michal/README.md)
  - __bin__
    - [cli.js](michal/bin/cli.js)
  - [michal.png](michal/michal.png)
  - [node_modules](michal/node_modules)
  - [npm-debug.log](michal/npm-debug.log)
  - [package.json](michal/package.json)
  - [screen.png](michal/screen.png)
  - __scripts__
    - [assert.js](michal/scripts/assert.js)
    - [fancom.js](michal/scripts/fancom.js)
    - [jshintrc.js](michal/scripts/jshintrc.js)
    - [package-json.js](michal/scripts/package-json.js)
    - [precommit-hook.js](michal/scripts/precommit-hook.js)
    - [scripts.js](michal/scripts/scripts.js)
    - [tests.js](michal/scripts/tests.js)
  - __tests__
    - [michal-tests.js](michal/tests/michal-tests.js)
```

note that this script __skips__ `.git` & `node_modules` directories.
