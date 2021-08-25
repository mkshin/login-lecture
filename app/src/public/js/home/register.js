"use strict";

const id = document.querySelector("#id"),
    name1 = document.querySelector("#name"),
    pasword = document.querySelector("#pasword"),
    confirmPasword = document.querySelector("#confirm-pasword"),
    registerBtn = document.querySelector("#button");
  console.log("hello register");
  registerBtn.addEventListener("click", register);

  function register() {
    const req = {
        id: id.value,
        name: name1.value,
        pasword: pasword.value,
        confirmPasword: confirmPasword.value,
    };

    fetch("/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    })
        .then((res) => res.json())
        .then((res) => {
            if (res.success) {
                location.href = "/login";
            } else {
                alert(res.msg);
            }
        })
        .catch((err) => {
            console.error(new Error("회원가입 중 에러 발생"));
        });
  }
