import express from "express";
import { Register,getAllUsers,Login,Logout } from "../controllers/user.js";


const router =express.Router();
router.route("/register").post(Register);
router.route("/login").post(Login);
router.route("/logout").get(Logout);
router.route("/getAllUsers").get(getAllUsers);

export default router;