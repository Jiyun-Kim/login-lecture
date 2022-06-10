"use strict"

// DOM : Document Object Model
const id = document.querySelector("#id"),
     pwd = document.querySelector("#pwd"),
     loginBtn = document.querySelector("#button");

console.log(id);

loginBtn.addEventListener("click", login);

function login(){
    if (!id.value) return alert("아이디를 입력해 주세요.");
    if (!pwd.value) return alert("비밀번호를 입력해 주세요.");

    const req = {
        id: id.value,
        pwd: pwd.value
    };

    // REST API : ex16
    fetch("/login", {
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
                if (res.err) return alert(res.err);
                alert(res.msg);
            }
        }) // res.json 값은 promise임. 기본 res 의 반환값은 response 스트림임
        .catch((err) => {
            console.error("로그인 중 에러 발생");
        });
}