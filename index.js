(function(){
  'use strict';
  var tree = require('dir-tree');
  var dir = process.cwd();

  console.log(dir);
  tree(dir).then(function(result){
    console.log(result);
  });

})();
