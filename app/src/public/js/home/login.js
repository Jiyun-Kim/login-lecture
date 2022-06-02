"use strict"

// DOM : Document Object Model
const id = document.querySelector("#id"),
     pwd = document.querySelector("#pwd"),
     loginBtn = document.querySelector("button");

console.log(id);

loginBtn.addEventListener("click", login);

function login(){
    const req = {
        id: id.value,
        pwd: pwd.value
    };

    console.log(req);
    console.log(JSON.stringify(req));
    // REST API : ex16
    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(req),
    })
        .then((res) => res.json())
        .then((res) => console.log(res)); // res.json 값은 promise임. 기본 res 의 반환값은 response 스트림임
}