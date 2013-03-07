var rootPath = "Resources/js/";

searchString = convertToRequireFormat(process.argv[2]);
replaceString = convertToRequireFormat(process.argv[3]);

var iterateThroughJs = require("./node-file/iterate-through-js-files.js").iterateThroughJs;
iterateThroughJs(rootPath, replaceInFile);
runGitMove();

function convertToRequireFormat(path) {
  path = path.replace(rootPath, "");
  return path.replace(".js", "");
}

function replaceInFile(path) {
  var replace = require("./node-file/replaceInFile.js");
  replace.replaceInFile(searchString, replaceString, path);
}

function runGitMove() {
  var sys = require('sys')
  var exec = require('child_process').exec;
  exec("git mv " + process.argv[2] + " " + process.argv[3], execCallback);

  function execCallback(error, stdout, stderr) {
    sys.puts(stdout)
  }
}
