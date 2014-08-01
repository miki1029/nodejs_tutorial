// createHash.js

var crypto = require('crypto');

// 해시 생성
var shasum = crypto.createHash('sha1'); // shasum은 Hash 클래스의 인스턴스입니다.
shasum.update('이 문자열이 해싱됩니다.');
var output = shasum.digest('hex');

console.log(output);