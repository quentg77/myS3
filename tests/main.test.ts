import app from '../src/server'
import supertest from 'supertest'
import { createConnection, Connection } from 'typeorm'

const server = supertest(app);

let connection: Connection;

beforeAll(async (done) => {
	connection = await createConnection();
	done();
});

describe('Get root', () => {
	it('simple get', async (done) => {
		const res = await server.get('/');
		expect(res.status).toBe(200);
		done();
	});
});

describe('CRUD', () => {
	let userTest = { uuid: undefined, nickname: "test", email: "test.test@test.test", password: "test" };
	let badUserTest = { uuid: '4f8dfbfe-7da4-4fc9-ac0e-5c9fb8b41c0e', nickname: "test", email: "test.test@test.test", password: "t" };

	describe('Good info', () => {
		it('signup', async (done) => {
			const res = await server.post("/api/signup").send(userTest);
			expect(res.status).toBe(200);
			done();
		});
	
		it('signin', async (done) => {
			const user = { ...userTest, email: undefined };
			const res = await server.post("/api/signin").send(user);
			userTest = { ...userTest, uuid: res.body.uuid };
			expect(res.status).toBe(200);
			done();
		});
	
		it('delete', async (done) => {
			const user = { uuid: userTest.uuid };
			const res = await server.delete("/api/secured/user/delete").send(user);
			expect(res.status).toBe(200);
			done();
		});
	});

	// describe('Bad info', () => {
	// 	it('signup', async (done) => {
	// 		const res = await server.post("/api/signup").send(badUserTest);
	// 		expect(res.status).toBe(400);
	// 		done();
	// 	});
	
	// 	it('signin', async (done) => {
	// 		const badUser = { ...badUserTest, email: undefined };
	// 		const res = await server.post("/api/signin").send(badUser);
	// 		expect(res.status).toBe(400);
	// 		done();
	// 	});
	
	// 	it('delete', async (done) => {
	// 		const badUser = { uuid: badUserTest.uuid };
	// 		const res = await server.delete("/api/secured/user/delete").send(badUser);
	// 		expect(res.status).toBe(400);
	// 		done();
	// 	});
	// });
});

afterAll(async (done) => {
	await connection.close();
	done();
});