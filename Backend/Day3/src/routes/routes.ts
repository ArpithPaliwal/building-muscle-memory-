import { Router } from "express";

const router = Router()

router.route("/gfg").post(()=>{console.log("hi");
})

export default router