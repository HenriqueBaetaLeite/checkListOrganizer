const { describe, it, beforeEach } = require("node:test");
const assert = require("node:assert");
const app = require("../../app");
const request = require("supertest");

describe("Test health router, request to app", () => {
  it("should return 200 when calling /health", async () => {
    const response = await request(app).get("/health");
    assert.strictEqual(response.status, 200);
    assert.strictEqual(response.text, "API is working");
  });
});
