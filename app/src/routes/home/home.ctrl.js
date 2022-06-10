"use strict";

const logger = require("../../config/logger");
const User = require("../../models/User");

const output = {
    home: (req, res) => { // hello 라는 컨트롤러 함수를 만들고, 이를 외부에서 사용
        logger.info(`GET / 200 "홈 화면으로 이동"`);
        res.render("home/index");
    },
    login: (req, res) => {
        logger.info(`GET / login 200 "로그인 화면으로 이동"`);
        res.render("home/login");
    },
    register: (req, res) => {
        logger.info(`GET / register 200 "회원가입 화면으로 이동"`);
        res.render("home/register");
    }
}

const process = {
    login: async (req, res) => {
        const user = new User(req.body);
        const response = await user.login();
        if (response.err)
            logger.error(`POST / login 200 Response: "success: ${ response.success }, ${response.err}"`);
        else
            logger.info(`POST / login 200 Response: "success: ${ response.success }, msg: ${response.msg}"`);
        return res.json(response);
    },
    register: async (req, res) => {
        const user = new User(req.body);
        const response = await user.register();
        if (response.err)
            logger.error(`POST / login 200 Response: "success: ${ response.success }, ${response.err}"`);
        else
            logger.info(`POST / login 200 Response: "success: ${ response.success }, msg: ${response.msg}"`);
        return res.json(response);
    },
};

module.exports = { // 다른곳에서 사용할 수 있도록 object로 빼줌
    output,
    process
}; 

// object 는 원래 {key : value} 구조인데 key 만 입력하면 자체적으로 key와 같은 value를 넣어주게 됨
// ex) hello, login 이런식으로 입력 시 hello : hello, login : login 과 같은 의미