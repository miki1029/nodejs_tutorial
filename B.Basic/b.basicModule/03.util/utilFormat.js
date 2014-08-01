// utilFormat.js

var util = require('util');
var data = util.format('%d, %s, %j', 10, 'abc', { name: 'node.js'});

console.log(data);

// 출력 결과
// 10, abc, {"name":"node.js"}