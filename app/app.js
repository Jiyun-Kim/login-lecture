"use strict";
// node 명령어 : javascript 파일을 V8 엔진을 사용해서 코드를 해석하라는 명령어
// Node.js의 V8 엔진은 크롬 브라우저에서도 사용되는 자바스크립트 컴파일러
// 'npm install library --save'에서 save 옵션 : 룰이라고 생각하면 됨, save 옵션을 줘야 package.json 파일을 통해 설치한 모듈들을 관리하기 쉬워짐

// 모듈
const express = require("express"); // 모듈 다운
const bodyParser = require("body-parser");
const dotenv = require("dotenv");   // 환경 변수 설정 모듈, 어떤 os에서 개발하더라도 다 동일하게 환경변수 등록 및 가져오기 가능
dotenv.config();

const app = express(); // express 실행

// 라우팅
const home = require("./src/routes/home");

// 앱 셋팅
app.set("views", "./src/views");
app.set("view engine", "ejs");

// 정적 경로 추가
app.use(express.static(`${__dirname}/src/public`));
// body-parser 사용 시 미들웨어 등록
app.use(bodyParser.json());
// URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(bodyParser.urlencoded({extended: true}));
app.use("/", home); // use : 미들 웨어를 등록해주는 메서드

module.exports = app;
