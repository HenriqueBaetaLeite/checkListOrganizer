const { describe, it, beforeEach } = require("node:test");
const assert = require("node:assert");
const app = require("../../app");
const request = require("supertest");

describe("Test health router, request to app", () => {
  it("should return 200 when calling /health", async () => {
    const response = await request(app).get("/health");
    assert(response.status, 200);
    assert(response.body, { message: "API is working" });
  });
});
