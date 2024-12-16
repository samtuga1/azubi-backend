import prisma from "./prisma";

const main = async () => {
  try {
    // Clear existing data
    await prisma.product.deleteMany();
    await prisma.cartItem.deleteMany();
    await prisma.cart.deleteMany();

    console.log("Existing data cleared!");

    // Seed products
    const products = await prisma.product.createMany({
      data: [
        {
          title: "Laptop",
          description: "High performance laptop",
          price: 1200.99,
          photo:
            "https://images.unsplash.com/photo-1484788984921-03950022c9ef?q=80&w=3032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          title: "Smartphone",
          description: "Latest model smartphone",
          price: 699.99,
          photo:
            "https://images.unsplash.com/photo-1598965402089-897ce52e8355?q=80&w=3136&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          title: "Headphones",
          description: "Noise-cancelling headphones",
          price: 199.99,
          photo:
            "https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8SGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D",
        },
        {
          title: "Smartwatch",
          description: "Feature-rich smartwatch",
          price: 249.99,
          photo:
            "https://images.unsplash.com/photo-1722153297252-8fb1645f5bfb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fFNtYXJ0d2F0Y2h8ZW58MHx8MHx8fDA%3D",
        },
        {
          title: "Tablet",
          description: "Lightweight and portable tablet",
          price: 399.99,
          photo:
            "https://plus.unsplash.com/premium_photo-1680371834119-bc9d0057ddec?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fFRhYmxldHxlbnwwfHwwfHx8MA%3D%3D",
        },
      ],
    });

    console.log(`${products.count} products created!`);

    // Seed a cart
    const cart = await prisma.cart.create({
      data: {
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });

    console.log(`Cart created with ID: ${cart.id}`);
  } catch (error) {
    console.log(error);
    process.exit();
  } finally {
    prisma.$disconnect();
  }
};

main();
