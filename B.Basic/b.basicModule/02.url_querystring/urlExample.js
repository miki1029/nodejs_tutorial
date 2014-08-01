// urlExmaple.js

var url = require('url');
var parsedObject = url.parse('http://user:pass@host.com:8080/p/a/t/h?query=string#hash');

console.log(parsedObject); // url 객체 정보 출력
console.log(url.format(parsedObject)); // url 객체를 문자열로 출력