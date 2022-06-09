"use strict";

// promise 가 수행하는 동작이 끝남과 동시에 상태를 알려주기 때문에 비동기 처리에 효과적
// promise 반환 시 .then() 이후에 처리 구문 작성
// promise 반환 시 .catch() 이후에 오류 처리 구문 작성, fetch() API 가 반환
const fs = require("fs").promises;

class UserStorage {
    // 클래스 안에 변수 선언 시 'const' 필요 없음
    // 은닉화 : # 붙이면 private
    static #getUserInfo(data, id) {
        const users = JSON.parse(data);
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users); // key 값들만 배열로 만듦. [id, pwd, name]
        const userInfo = usersKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {}); 

        return userInfo;
    }

    static #getUsers(data, isAll, fields) {
        const users = JSON.parse(data);
        if (isAll) return users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
              newUsers[field] = users[field];
            }
            return newUsers;
        }, {});

        return newUsers;
    }

    static getUsers(isAll, ...fields) {
        return fs
            .readFile("./src/databases/users.json")
            .then((data) => {
                return this.#getUsers(data, isAll, fields);
            })
            . catch(console.error);

        return newUsers;
    }

    static getUserInfo(id) {
        return fs
            .readFile("./src/databases/users.json")
            .then((data) => {
                return this.#getUserInfo(data, id);
            })
            . catch(console.error);
    }


    static async save(userInfo) {
        const users = await this.getUsers(true);
        if (users.id.includes(userInfo.id)) {
            throw "이미 존재하는 아이디입니다.";
        }
        users.id.push(userInfo.id);
        users.pwd.push(userInfo.pwd);
        users.name.push(userInfo.name);
        fs.writeFile("./src/databases/users.json", JSON.stringify(users));
        return { success: true };
    }
}

module.exports = UserStorage;