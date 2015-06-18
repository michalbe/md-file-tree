(function(){
  'use strict';
  var tree = require('./walker');
  var dir = process.cwd();
  var indentation = 0;

  var output = '';

  var addIndentation = function(){
    return new Array((indentation*2)+1).join(' ');
  };

  var parseResult = function(result){
    indentation++;
    for (var i in result) {
      if (typeof result[i] === 'string') {
        output += addIndentation() + '[' + result[i] + '](' + i + ')\n';
      } else if (typeof result[i] === 'object'){
        output += addIndentation() + 'folder: ' + i + '\n';
        parseResult(result[i]);
        indentation--;
      }
    }
  };
  tree(dir, function(err, result){
    parseResult(result);
    console.log(output);
  });

})();
