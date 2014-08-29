// removeEvent.js

// 이벤트 핸들러 함수
var exitListener = function() {
    console.log('프로그램 종료');
};

// 이벤트 연결
process.on('exit', exitListener);

// 이벤트 제거
process.removeListener('exit', exitListener);
//process.removeAllListeners('exit'); // process 객체 exit 이벤트의 모든 리스너 제거
//process.removeAllListeners();       // process 객체의 모든 이벤트 리스너 제거