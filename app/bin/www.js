"use strict";

const app = require("../app");
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => { // 'function' 생략가능
    console.log("서버 가동");
});