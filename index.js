// Given a build.gradle, and versionName, and versionNumber - will replace values in file.
var fs = require('fs');
var lineNumber = require('line-number');
var file = fs.readFileSync('build.gradle','utf-8');
var re = /versionName\ \'[0-9].*/g;
var line = re
console.log(lineNumber(file,line));
var line_num =35
var fs = require('fs')
fs.readFile('build.gradle', 'utf8', function(err, data)
{
    if (err)
    {
        // check and handle err
    }
    var beginning = data.split('\n').slice(line_num-1).join('\n');
    var after = data.split('\n').slice(line_num+1).join('\n');
    var all = []
    all.push(beginning,after)
    fs.writeFile('build.gradle', all);
});

// console.log(lineNumber(file,re));
/*
var data = fs.readFileSync('build.gradle').toString().split("\n");
data.splice(35, 0, "versionName: stuffs..and Your String");
var text = data.join("\n");

fs.writeFile('build.gradle', text, function (err) {
  if (err) return console.log(err);
});
*/

