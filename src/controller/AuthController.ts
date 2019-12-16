import { getRepository, Repository } from "typeorm";
import { Request } from "express";
import { User } from "../entity/User";

export class AuthController {
	static signin = async (
		nickname: string,
		password: string,
	): Promise<User> => {
		console.log("signin");
		const userRepository: Repository<User> = getRepository(User);
		return await userRepository.findOne({ nickname, password });
	};

	static signup = async (
		nickname: string,
		email: string,
		password: string,
	): Promise<User> => {
		console.log("signup");
		const userRepository: Repository<User> = getRepository(User);
		return await userRepository.save({ nickname, email, password });
	};
}
