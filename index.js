(function(){
  'use strict';
  var walk = require('./utils/walker.js');
  var dir = process.cwd();

  console.log(dir);
  walk(dir, function(err, result){
    //console.log(result);
  });

})();
