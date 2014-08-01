// readFile.js

var fs = require('fs');

// 동기적 읽기
var text = fs.readFileSync('text.txt', 'utf8');
console.log(text);

// 비동기적 읽기
fs.readFile('text.txt', 'utf8', function(err, data) {
    console.log(data);
});