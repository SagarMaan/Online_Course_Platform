

import express from "express"
import { adminstrationRegister } from "../controllers/administratorController.js"

const router = express.Router()

router.all('/*' , (req , res) => {
    return res.status(400).send({ status : false , messaage : "Path Invalid"})
})

router.post('/createAdministrator' , adminstrationRegister)

export default router