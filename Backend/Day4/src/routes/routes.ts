import { Router } from "express";

const router = Router()

router.route("/hi").get(()=>{console.log("ho");
})

export default router;