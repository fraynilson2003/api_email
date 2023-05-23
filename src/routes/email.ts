import { Router } from "express";
import { setEmail } from "../controllers/email";

const router = Router()

/**Get */
router.post("/:genderId", setEmail)


export { router }
