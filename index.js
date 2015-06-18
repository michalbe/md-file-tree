(function(){
  'use strict';
  var walk = require('./utils/walker.js');
  var dir = process.cwd();

  walk(dir, function(result){
    console.log(result);
  });

})();
