import { Entity, PrimaryGeneratedColumn, Column, Unique } from "typeorm";
import { Length, IsNotEmpty, IsEmail } from "class-validator";

@Entity()
export class User {
	@PrimaryGeneratedColumn("uuid")
	uuid!: number;

	@Column("text", { nullable: true })
	@IsNotEmpty()
	nickname!: string;

	@Column("text", { nullable: true })
	@IsNotEmpty()
	@IsEmail()
	email!: string;

	@Column("text", { nullable: true })
	@Length(4, 20)
	@IsNotEmpty()
	password!: string;
}
