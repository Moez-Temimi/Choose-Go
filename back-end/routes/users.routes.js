const router = require('express').Router();
const UsersContoller = require("../Controllers/UsersController");


// create new user
router.post("/signup", UsersContoller.signup);
// log in for user experience
router.post("/login", UsersContoller.login);
//log out from the session
router.get("/logout", UsersContoller.logout);
//check if user is logged in
router.get("/checkAuth",   UsersContoller.checkAuth);


module.exports = router;