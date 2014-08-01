// exceptionHandleSync.js

var fs = require('fs');

// 파일 읽기
try {
    // 존재하지 않는 파일을 읽으려 합니다.
    var data = fs.readFileSync('nonExist.txt', 'utf8');
    console.log(data);
}
catch(err) {
    console.log(err);
}

// 파일 쓰기
try {
    // 루트 위치에 파일을 쓰려고 합니다.(권한 거부)
    fs.writeFileSync('/unauthorized.txt', 'Hello World', 'utf8');
    console.log('파일 쓰기 성공');
}
catch(err) {
    console.log(err);
}