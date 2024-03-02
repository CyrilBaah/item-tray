const request = require('supertest');
const app = require('../app');

describe('GET /', () => {
  it('should return a welcome message', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('🍽️ Item Tray | Ready to serve!!! 🚀');
  });
});

describe('GET /items', () => {
  it('should return all items', async () => {
    const response = await request(app).get('/items');
    expect(response.status).toBe(200);
    expect(response.body).toEqual([
      { id: 1, name: 'Jollof Rice', description: '🍚 Spicy rice dish.' },
      { id: 2, name: 'Banku and Tilapia', description: '🍲 Corn and cassava dough with fish.' },
      { id: 3, name: 'Waakye', description: '🍛 Rice and beans dish.' }
    ]);
  });
});

describe('GET /items/:id', () => {
  it('should return the item with the specified id', async () => {
    const response = await request(app).get('/items/1');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ id: 1, name: 'Jollof Rice', description: '🍚 Spicy rice dish.' });
  });

  it('should return 404 if item with id is not found', async () => {
    const response = await request(app).get('/items/100');
    expect(response.status).toBe(404);
  });
});

describe('POST /items', () => {
  it('should add a new item', async () => {
    const newItem = { name: 'Fufu', description: '🍠 Mashed cassava and plantains.' };
    const response = await request(app).post('/items').send(newItem);
    expect(response.status).toBe(201);
    expect(response.body).toMatchObject(newItem);
  });
});

describe('PUT /items/:id', () => {
  it('should update the item with the specified id', async () => {
    const updatedItem = { name: 'Banku', description: '🌽 Fermented corn and cassava dough.' };
    const response = await request(app).put('/items/2').send(updatedItem);
    expect(response.status).toBe(200);
    expect(response.body).toMatchObject(updatedItem);
  });

  it('should return 404 if item with id is not found', async () => {
    const response = await request(app).put('/items/100').send({});
    expect(response.status).toBe(404);
  });
});

describe('DELETE /items/:id', () => {
  it('should delete the item with the specified id', async () => {
    const response = await request(app).delete('/items/3');
    expect(response.status).toBe(204);
  });

  it('should return 404 if item with id is not found', async () => {
    const response = await request(app).delete('/items/100');
    expect(response.status).toBe(404);
  });
});