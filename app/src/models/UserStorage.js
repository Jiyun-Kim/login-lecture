"use strict";

class UserStorage {
    // 클래스 안에 변수 선언 시 'const' 필요 없음
    // 은닉화 : # 붙이면 private
    static #users = {
        id: ["user1", "나개발", "김팀장"],
        pwd: ["1111", "2222", "1234"],
        name: ["유저1", "2222", "1234"],
    };

    static getUsers(...fields) {
        console.log("field : " + fields);
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
              newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }

    static getUserInfo(id) {
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users); // key 값들만 배열로 만듦. [id, pwd, name]
        const userInfo = usersKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});

        return userInfo;
    }

    static save(userInfo) {
        const users = this.#users;
        users.id.push(userInfo.id);
        users.pwd.push(userInfo.pwd);
        users.name.push(userInfo.name);
        return { success: true };
    }
}

module.exports = UserStorage;