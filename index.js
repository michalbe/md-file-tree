(function(){
  'use strict';
  var walk = require('./utils/walker.js');
  var dir = process.cwd();

  //console.log(walk);
  walk(dir, function(result){
    console.log(result);
  });

})();
