import express from "express"
import { signin, signup } from "../controllers/auth.js";

const router = express.Router()


//Create user
router.post("/signup", signup)

//sign in
router.post("/signin", signin)

//GOOGLE AUTH
router.post("/google", )

export default router;