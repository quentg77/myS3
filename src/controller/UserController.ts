import { getRepository } from "typeorm";
import { Request } from "express";
import { User } from "../entity/User";

export class UserController {
	private userRepository = getRepository(User);

	async all(): Promise<User[]> {
		return this.userRepository.find();
	}

	async one(request: Request): Promise<User> {
		return this.userRepository.findOne(request.params.id);
	}

	async save(request: Request): Promise<User> {
		return this.userRepository.save(request.body);
	}

	async remove(request: Request): Promise<User> {
		const userToRemove = await this.userRepository.findOne(
			request.params.id,
		);
		return await this.userRepository.remove(userToRemove);
	}
}
