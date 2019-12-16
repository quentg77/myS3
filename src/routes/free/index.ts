import { Router, Request, Response } from "express";
import { AuthController } from "../../controller/AuthController";
import { User } from "../../entity/User";

const router: Router = Router();

router.post("/signup", async (req: Request, res: Response) => {
	const { nickname, email, password } = req.body;
	const user: User = await AuthController.signup(nickname, email, password);
	if (user) {
		res.status(200).send(user);
	} else {
		res.status(400).send("user not found");
	}
	res.end();
});

router.post("/signin", async (req: Request, res: Response) => {
	const { nickname, password } = req.body;
	const user: User = await AuthController.signin(nickname, password);
	if (user) {
		res.status(200).send(user);
	} else {
		res.status(400).send("user not found");
	}
	res.end();
});

export default router;
