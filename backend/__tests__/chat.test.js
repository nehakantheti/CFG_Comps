const request = require('supertest');
const app = require('../server');

require('./setup');

describe('Chat Service', () => {
  let authToken;
  const testUser = {
    name: 'Test User',
    email: 'test@example.com',
    password: 'password123',
    role: 'user'
  };

  beforeEach(async () => {
    // Register and login to get token
    const res = await request(app)
      .post('/api/auth/register')
      .send(testUser);
    
    authToken = res.body.data.token;
  });

  describe('POST /api/chat/message', () => {
    it('should receive response with valid message', async () => {
      const testMessage = 'Hello, chatbot!';
      
      const res = await request(app)
        .post('/api/chat/message')
        .set('Authorization', `Bearer ${authToken}`)
        .send({ message: testMessage });

      expect(res.statusCode).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data).toHaveProperty('message');
      expect(res.body.data).toHaveProperty('timestamp');
    });

    it('should fail without message', async () => {
      const res = await request(app)
        .post('/api/chat/message')
        .set('Authorization', `Bearer ${authToken}`)
        .send({});

      expect(res.statusCode).toBe(400);
      expect(res.body.success).toBe(false);
    });

    it('should not allow access without token', async () => {
      const res = await request(app)
        .post('/api/chat/message')
        .send({ message: 'Hello' });

      expect(res.statusCode).toBe(401);
      expect(res.body.success).toBe(false);
    });
  });
}); 