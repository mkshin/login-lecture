"use strict";

const id = document.querySelector("#id"),
    pasword = document.querySelector("#pasword"),
    loginBtn = document.querySelector("button");

  loginBtn.addEventListener("click", login);

  function login() {
    const req = {
        id: id.value,
        pasword: pasword.value,
    };

    console.log(req);
  }
