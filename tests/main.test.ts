import {app} from '../src/server'
import * as supertest from 'supertest'

const server = supertest(app);

describe('Get root', () => {
	it('simple get', async (done) => {
		const res = await server.get('/');
		expect(res.status).toBe(200);
		done();
	})
})