"use strict"; // 이크마 스트릭스의 문법을 준수하겠다. js 파일 상단에 입력

const express = require("express");
const router = express.Router(); // 

const ctrl = require("./home.ctrl"); // 컨트롤러에서 불러옴

router.get("/", ctrl.output.home);
router.get("/login", ctrl.output.login);
router.get("/register", ctrl.output.register);

router.post("/login", ctrl.process.login);
router.post("/register", ctrl.process.register);

module.exports = router; // 외부파일에서 사용할 수 있도록 웹으로 내보내기
