"use strict";

class UserStorage {
    // 클래스 안에 변수 선언 시 'const' 필요 없음
    // 은닉화 : # 붙이면 private
    static #users = {
        id: ["user1", "나개발", "김팀장"],
        pwd: ["1111", "2222", "1234"],
        names: ["유저1", "2222", "1234"],
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
}

module.exports = UserStorage;