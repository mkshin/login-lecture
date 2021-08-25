"use strict";

const UserStorage = require("./UserStorage");

class User {
    constructor(body) {
        this.body = body;
    }

    async login() {
        const body = this.body;
        const {id, pasword} = await UserStorage.getUserInfo(body.id);
        if (id) {
            if (id === body.id && pasword === body.pasword) {
                return { success: true };
            }
            return { success: false, msg: "비밀번호가 틀렸습니다." };
        }
        return { success: false, msg: "존재하지 않는 아이디입니다." };
    }
}

module.exports = User;