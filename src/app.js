"use strict";
// node 명령어 : javascript 파일을 V8 엔진을 사용해서 코드를 해석하라는 명령어
// Node.js의 V8 엔진은 크롬 브라우저에서도 사용되는 자바스크립트 컴파일러
// 'npm install library --save'에서 save 옵션 : 룰이라고 생각하면 됨, save 옵션을 줘야 package.json 파일을 통해 설치한 모듈들을 관리하기 쉬워짐

// 모듈
const express = require("express"); // 모듈 다운
const app = express(); // express 실행

// 라우팅
const home = require("./routes/home");

// 앱 셋팅
app.set("views", "./views");
app.set("view engine", "ejs");


app.use("/", home); // use : 미들 웨어를 등록해주는 메서드

module.exports = app;
