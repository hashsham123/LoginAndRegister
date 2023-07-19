const express = require("express");
const router = express.Router();


const checkAuth = require("../middlewares/checkAuth");
const checkAdmin = require("../middlewares/checkAdmin");
const {
  fetchCurrentUser,
  loginWithPhoneOtp,
  createNewUser,
  verifyOTP,
  handleAdmin
} = require("../controllers/auth.controller");


router.post("/register",function(req, res){
    createNewUser
  });

  router.post("/login_with_phone",function(req, res){
    loginWithPhoneOtp
  });



  router.post("/verify",function(req, res){
    verifyOTP
  });


router.get("/me",function(req, res){
    fetchCurrentUser
  });

router.get("/admin",function(req, res){
    handleAdmin
  });
module.exports = router;