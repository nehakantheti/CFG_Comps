const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

let mongod;

// Connect to the in-memory database before running tests
beforeAll(async () => {
  try {
    mongod = await MongoMemoryServer.create();
    const uri = await mongod.getUri();
    await mongoose.connect(uri);
  } catch (error) {
    console.error('Failed to start MongoDB Memory Server:', error);
    throw error;
  }
});

// Clear database between tests
afterEach(async () => {
  if (mongoose.connection.db) {
    const collections = await mongoose.connection.db.collections();
    for (let collection of collections) {
      await collection.deleteMany({});
    }
  }
});

// Disconnect and stop mongodb after all tests
afterAll(async () => {
  if (mongoose.connection) {
    await mongoose.connection.close();
  }
  if (mongod) {
    await mongod.stop();
  }
}); 