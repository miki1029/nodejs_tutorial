// bindEvent.js

// addListener 메소드
process.addListener('exit', function() {
    console.log('exit 이벤트 연결');
});

// on 메소드
process.on('exit', function(code) {
    console.log('종료 코드: ' + code);
});

// once 메소드
process.once('uncaughtException', function(err) {
    console.log('에러 메시지: ' + err);
});

// 존재하지 않는 함수를 실행시킵니다. -> 예외 발생 -> uncaughtException 이벤트 발생
nonexistentFunc();
console.log('예외가 발생한 이후 구문은 실행되지 않습니다.');