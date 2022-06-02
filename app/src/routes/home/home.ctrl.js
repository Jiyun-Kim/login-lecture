"use strict";

const home = (req, res) => { // hello 라는 컨트롤러 함수를 만들고, 이를 외부에서 사용
    res.render("home/index");
}

const login = (req, res) => {
    res.render("home/login");
}

module.exports = { // 다른곳에서 사용할 수 있도록 object로 빼줌
    home,
    login
};

// object 는 원래 {key : value} 구조인데 key 만 입력하면 자체적으로 key와 같은 value를 넣어주게 됨
// ex) hello, login 이런식으로 입력 시 hello : hello, login : login 과 같은 의미