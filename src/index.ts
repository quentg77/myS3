import "reflect-metadata";
import { createConnection, getRepository } from "typeorm";
import { User } from "./entity/User";
import app from "./server";

createConnection()
	.then(async connection => {
		// create express app
		const port = 3000;
		app.listen(port, () =>
			console.log(`Example app listening on port ${port}!`),
		);

		// insert new users for test
		const userRepository = getRepository(User);
		const quentinUser = await userRepository.findOne({
			nickname: "quentin",
		});

		if (!quentinUser) {
			await connection.manager.save(
				connection.manager.create(User, {
					nickname: "quentin",
					email: "q.guichaoua@gmail.com",
					password: "toto",
				}),
			);
		}
	})
	.catch(error => console.log(error));
