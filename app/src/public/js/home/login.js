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
        pwd: pwd.value,
    };
}