import { getRepository, FindOperator } from "typeorm";
import { Request } from "express";
import { User } from "../entity/User";

export class UserController {
	// private userRepository = getRepository(User);

	static delete = async (
		uuid: number | FindOperator<number>,
	): Promise<User> => {
		console.log("delete");
		const userRepository = getRepository(User);
		const userToRemove = await userRepository.findOne({ uuid });
		return await userRepository.remove(userToRemove);
	};

	// async all(): Promise<User[]> {
	// 	return this.userRepository.find();
	// }

	// async one(request: Request): Promise<User> {
	// 	return this.userRepository.findOne(request.params.id);
	// }

	// async save(request: Request): Promise<User> {
	// 	return this.userRepository.save(request.body);
	// }

	// async delete(request: Request): Promise<User> {
	// 	const userToRemove = await this.userRepository.findOne(
	// 		request.params.id,
	// 	);
	// 	return await this.userRepository.remove(userToRemove);
	// }
}
