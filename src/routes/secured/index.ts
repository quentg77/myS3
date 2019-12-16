import { Router, Request, Response } from "express";
import user from "./user";

const router: Router = Router();

router.use("/user", user);

export default router;
