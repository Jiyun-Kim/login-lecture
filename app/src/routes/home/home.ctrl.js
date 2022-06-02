"use strict";

const users = {
    id: ["user1", "나개발", "김팀장"],
    pwd: ["1111", "2222", "1234"]
};

const output = {
    home: (req, res) => { // hello 라는 컨트롤러 함수를 만들고, 이를 외부에서 사용
        res.render("home/index");
    },
    
    login: (req, res) => {
        res.render("home/login");
    }
}

const process = {
    login: (req, res) => {
        const id = req.body.id,
            pwd = req.body.pwd;

        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if (users.pwd[idx] === pwd) {
                return res.json({
                    success: true,
                });
            }
        }
        
        return res.json({
            success: false,
            msg: "로그인에 실패했습니다."
        });
    },
};

module.exports = { // 다른곳에서 사용할 수 있도록 object로 빼줌
    output,
    process
};

// object 는 원래 {key : value} 구조인데 key 만 입력하면 자체적으로 key와 같은 value를 넣어주게 됨
// ex) hello, login 이런식으로 입력 시 hello : hello, login : login 과 같은 의미