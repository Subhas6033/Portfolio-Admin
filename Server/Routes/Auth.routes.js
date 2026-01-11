import { Router } from "express";
import { signUp } from "../Controllers/Auth.controllers.js";

const authRoutes = Router();

authRoutes.post("/signup", signUp);

export default authRoutes;
