"use strict";

const UserStorage = require("./UserStorage");

class User {
    constructor(body) {
        this.body = body;
    }
    
    async login() {
        const client = this.body;
        // await은 promise를 반환하는 항목에만 사용 가능, await는 async 함수 안에서만 사용 가능
        const { id, pwd } = await UserStorage.getUserInfo(client.id);

        if (id) {
            if (id === client.id && pwd === client.pwd) {
                return { success: true };
            }
            return { success: false, msg: "비밀번호가 틀렸습니다." };
        }
        return { success: false, msg: "존재하지 않는 아이디입니다." };
    }

    async register() {
        const client = this.body;
        try {
            const response = await UserStorage.save(client);
            return response;
        } catch (err) {
            return { success: false, msg: err };
        }
        
        return response;
    }
}

module.exports = User;