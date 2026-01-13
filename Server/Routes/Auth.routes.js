import { Router } from "express";
import { signUp, login, logout } from "../Controllers/Auth.controllers.js";

const authRoutes = Router();

authRoutes
  .post("/signup", signUp)
  .post("/login", login)
  .post("/logout", logout);

export default authRoutes;
