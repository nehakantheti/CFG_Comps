const request = require('supertest');
const app = require('../server');

require('./setup');

describe('Protected Routes', () => {
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

  describe('GET /api/user/profile', () => {
    it('should access profile with valid token', async () => {
      const res = await request(app)
        .get('/api/user/profile')
        .set('Authorization', `Bearer ${authToken}`);

      expect(res.statusCode).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data.email).toBe(testUser.email);
    });

    it('should not access profile without token', async () => {
      const res = await request(app)
        .get('/api/user/profile');

      expect(res.statusCode).toBe(401);
      expect(res.body.success).toBe(false);
    });

    it('should not access profile with invalid token', async () => {
      const res = await request(app)
        .get('/api/user/profile')
        .set('Authorization', 'Bearer invalid_token');

      expect(res.statusCode).toBe(401);
      expect(res.body.success).toBe(false);
    });
  });
}); 