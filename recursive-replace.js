var rootPath = process.argv[2];
var searchString = process.argv[3];
var replaceString = process.argv[4];

var iterateThroughJs = require("./iterate-through-js-files.js").iterateThroughJs;
iterateThroughJs(rootPath, replaceInFile);

function replaceInFile(path) {
  var replace = require("./replaceInFile.js");
  replace.replaceInFile(searchString, replaceString, path);
}
