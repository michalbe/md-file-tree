(function(){
  'use strict';
  var tree = require('./walker');
  var dir = process.cwd();

  var output = '';
  var parseResult = function(result){
    for (var i in result) {
      if (typeof result[i] === 'string') {
        output += '[' + result[i] + '](' + i + ')\n';
      } else if (typeof result[i] === 'object'){
        output += 'folder: ' + i + '\n';
        parseResult(result[i]);
      }
    }
  };
  tree(dir, function(err, result){
    parseResult(result);
    console.log(output);
  });

})();
