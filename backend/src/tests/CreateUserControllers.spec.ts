import request from "supertest";
import { getConnection } from "typeorm";
import { app } from "../server";

describe("CreateUserControllers", () => {
  beforeAll(async () => {
    await getConnection().runMigrations();
  });

  afterAll(async () => {
    await getConnection().dropDatabase();
    await getConnection().close();
  });

  it("should be able to create a new form", async () => {
    const response = await request(app).post("/forms").send({
      name: "John Doe",
      email: "johndoe@example.com",
      observation: "This is a test observation",
    });

    expect(response.status).toBe(201);
  });
});
