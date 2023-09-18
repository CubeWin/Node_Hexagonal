import dotenv from 'dotenv';
dotenv.config();

import request from 'supertest';
import { Server } from '../../../server';

describe('Api user', () => {
    const appServer = new Server();

    describe('Get Usuario', () => {
        it('Conseguir todos los usuarios', async () => {
            const response = await request(appServer.app)
                .get('/api/user')
                .expect('Content-Type', /application\/json/);
            expect(response.statusCode).toBe(201);
            expect(response.body).toHaveProperty('success');
            expect(response.body.success).toBe(true || false);
            expect(response.body).toHaveProperty('message');
            expect(response.body).toHaveProperty('data');
            expect(response.body.data).toHaveProperty('request');
            expect(response.body.data).toHaveProperty('pagination');
        });
    });
});
