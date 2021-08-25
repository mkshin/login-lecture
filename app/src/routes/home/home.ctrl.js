"use strict";

const home = (req, res) => {
	res.render("home/index");
};

const login = (req, res) => {
	res.render("home/login");
};

module.exports = {
    home, // home: home (key: value)
    login, // login: login (key: value)
};