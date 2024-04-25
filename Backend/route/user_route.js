import express from "express";
import protector from "../middleware/protector.js";
import { userController } from "../controller/user_controller.js";

const router = express.Router();

router.get("/", protector,userController);

export default router;