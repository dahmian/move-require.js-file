var rootPath = "Resources/js/";

searchString = convertToRequireFormat(process.argv[2]);
replaceString = convertToRequireFormat(process.argv[3]);

var iterateThroughJs = require("./iterate-through-js-files.js").iterateThroughJs;
iterateThroughJs(rootPath, replaceInFile);

function convertToRequireFormat(path) {
  path = path.replace(rootPath, "");
  return path.replace(".js", "");
}

function replaceInFile(path) {
  var replace = require("./replaceInFile.js");
  replace.replaceInFile(searchString, replaceString, path);
}
