import { Router, Request, Response } from "express";
import free from "./free/";
import secured from "./secured/";

const router: Router = Router();

router.use("/secured", secured);
router.use("/", free);

export default router;
