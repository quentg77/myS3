import { Router, Request, Response } from "express";
import { UserController } from "../../controller/UserController";
import { User } from "../../entity/User";

const router: Router = Router();

router.delete("/delete", async (req: Request, res: Response) => {
	const { uuid } = req.body;
	const user: User = await UserController.delete(uuid);
	if (user) {
		res.status(200).send(user);
	} else {
		res.status(400).send("user not found");
	}
	res.end();
});
// router.put('/', userController.update);

export default router;
