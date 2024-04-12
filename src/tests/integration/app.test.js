const app = require('../../app');
const request = require('supertest');

describe('Request to app', () => {
  test('should return 200 when calling /health', async () => {
    const response = await request(app).get('/health');
    expect(response.status).toBe(200);
  });
});
