import request from "supertest";
import app from "express"; // Import the app
import prisma from "../prisma/prisma";

const server = app().listen(3001);

describe("Product Endpoints", () => {
  it("should fetch a single product by ID", async () => {
    const product = await prisma.product.create({
      data: {
        title: "Test Product",
        description: "This is a test product",
        price: 100.0,
        photo: "test-product.jpg",
      },
    });

    const res = await request(app).get(`/api/v1/products/${product.id}`);

    expect(res.statusCode).toBe(200);
    expect(res.body.data).toHaveProperty("id", product.id);
    expect(res.body.data).toHaveProperty("title", "Test Product");
    expect(res.body.data).toHaveProperty("price", "100");
  });
});

describe("Cart Endpoints", () => {
  it("should add multiple items to the cart", async () => {
    const products = await prisma.product.createMany({
      data: [
        {
          title: "Item 1",
          description: "First item",
          price: 10.0,
          photo: "item1.jpg",
        },
        {
          title: "Item 2",
          description: "Second item",
          price: 20.0,
          photo: "item2.jpg",
        },
      ],
    });

    const payload = [
      { productId: 1, quantity: 2 },
      { productId: 2, quantity: 1 },
    ];

    const res = await request(app).put("/api/v1/cart").send(payload);

    expect(res.statusCode).toBe(200);
    expect(res.body.data).toHaveLength(2);
    expect(res.body.data[0]).toHaveProperty("quantity");
    expect(res.body.data[1]).toHaveProperty("quantity");
  });
});

// Close server after tests
afterAll(() => {
  server.close();
});
