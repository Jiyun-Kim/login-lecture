"use strict"

// DOM : Document Object Model
const id = document.querySelector("#id"),
    name = document.querySelector("#name"),
    pwd = document.querySelector("#pwd"),
    confirmPwd = document.querySelector("#confirm-pwd"),
    registerBtn = document.querySelector("#button");

registerBtn.addEventListener("click", register);

function register(){
    const req = {
        id: id.value,
        name: name.value,
        pwd: pwd.value,
        confirmPwd: confirmPwd.value
    };

    console.log(req);
    
    fetch("/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(req),
    })
        .then((res) => res.json())
        .then((res) => {
            if (res.success) {
                location.href = "/";
            } else {
                alert(res.msg);
            }
        }) // res.json 값은 promise임. 기본 res 의 반환값은 response 스트림임
        .catch((err) => {
            console.error("회원가입 중 에러 발생");
        });
}