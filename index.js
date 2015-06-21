(function(){
  'use strict';
  var tree = require('./walker');
  var dirPath = process.cwd();
  var dir = dirPath.split('/').pop();
  var indentation = 0;

  var output = '- ' + dir + '\n';

  var addIndentation = function(){
    return new Array((indentation*2)+1).join(' ');
  };

  var parseResult = function(result){
    indentation++;
    for (var i in result) {
      if (typeof result[i] === 'string') {
        output += addIndentation() + '- [' + i + '](' + dir + result[i] + ')\n';
      } else if (typeof result[i] === 'object'){
        output += addIndentation() + '- ' + i + '\n';
        parseResult(result[i]);
        indentation--;
      }
    }
  };
  tree(dirPath, function(err, result){
    parseResult(result);
    console.log(output);
  });

})();
