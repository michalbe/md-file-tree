module.exports = (function(){
  'use strict';
  var fs = require('fs');

  var walk = function(dir, done) {
    var results = [];
    fs.readdir(dir, function(err, list) {
      if (err) {
        return done(err);
      }
      var i = 0;
      (function next() {
        var file = list[i++];
        if (!file) {
          return done(null, results);
        }
        file = dir + '/' + file;
        fs.stat(file, function(err, stat) {
          if (stat && stat.isDirectory()) {
            console.log(dir);
            walk(file, function(err, res) {
              results = results.concat(res);
              next();
            });
          } else {
            results.push({
              file: file,
              dir: dir
            });
            next();
          }
        });
      })();
    });
  };

  return walk;
})();
