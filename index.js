(function(){
  'use strict';
  var tree = require('./walker');
  var dir = process.cwd();

  tree(dir, function(err, result){
    console.log(result);
  });

})();
