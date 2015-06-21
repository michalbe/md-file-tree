(function(){
  'use strict';
  var tree = require('no-promise-dir-tree');
  var dir = process.cwd();

  console.log(dir);
  tree(dir, function(result){
    console.log(result);
  });

})();
