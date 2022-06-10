"use strict";

// promise 가 수행하는 동작이 끝남과 동시에 상태를 알려주기 때문에 비동기 처리에 효과적
// promise 반환 시 .then() 이후에 처리 구문 작성
// promise 반환 시 .catch() 이후에 오류 처리 구문 작성, fetch() API 가 반환
const db = require("../config/db");


class UserStorage {
    // 클래스 안에 변수 선언 시 'const' 필요 없음
    // 은닉화 : # 붙이면 private

    static getUserInfo(id) {
        return new Promise((resolve, reject) => {
            const query = "SELECT id, pwd FROM adfs where id = $1;";
            db.query(query, [id], (err, data) => {
                if (err) reject(`${err}`);
                else resolve(data.rows[0]);
            });
        });
    }

    static async save(userInfo) {
        return new Promise((resolve, reject) => {
            const query = "INSERT INTO users(id, name, pwd) VALUES ($1, $2, $3);";
            db.query(query, [userInfo.id, userInfo.name, userInfo.pwd], (err, data) => {
                if (err) reject(`${err}`);
                else resolve({ success: true });
            });
        });
    }
}

module.exports = UserStorage;