// exceptionHandle.js

var fs = require('fs');

// 파일 읽기
// 존재하지 않는 파일을 읽으려 합니다.
fs.readFile('nonExist.txt', 'utf8', function(err, data) {
    if(err) {
        // 파일 읽기 실패
        console.log(err);
    }
    else {
        // 파일 읽기 성공
        console.log(data);
    }
});

// 파일 쓰기
// 루트 위치에 파일을 쓰려고 합니다.(권한 거부)
fs.writeFile('/unauthorized.txt', 'Hello World', 'utf8', function(err, data) {
    if(err) {
        // 파일 쓰기 실패
        console.log(err);
    }
    else {
        // 파일 쓰기 성공
        console.log('파일 쓰기 성공');
    }
});